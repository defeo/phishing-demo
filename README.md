# A phishing demo

This material illustrates sniffing and phishing attacks on wireless
internet.

## Dependencies

You will need the following software

- [lighttpd](https://www.lighttpd.net/) for serving phished web pages,
- [aircrack-ng](https://www.aircrack-ng.org/) for wifi sniffing,
- [wireshark](https://www.wireshark.org/) for packet analysis,
- [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html),
  [hostapd](http://w1.fi/) and
  [create_ap](https://github.com/oblique/create_ap) for creating a
  wireless access point.

## What's included

This package contains demonstration material for two attacks on
unsecured wifi networks:

- The "Starbucks attack": sniffing passwords sent over HTTP on a
  public wifi network.

- The "DNS hijacking attack": setting up an AP that redirects all
  traffic to a local server with self-signed certificates.

### Detailed contents


- HTML slides, in the `localhost` folder, to present the attacks (in
  French).

- Configuration for the `create_ap` script that creates an AP named
  *FreeWifi*.

- Phishs of the landing pages of the following domains, served by
  `lighttpd`:
  - facebook.com, m.facebook.com, www.facebook.com,
  - instagram.com, www.instagram.com,
  - linked.com, www.linkedin.com,
  - wifi.free.fr;

- Configuration for a `lighttpd` server with a self-signed
  certificate.  **TODO:** see if it is possible to redirect all
  traffic, except the phishs, to the wifi.free.fr domain (useful for
  automated captive portal support in browsers).

Most contents are for the second attack. See the commands in the next
section to run the first attack.

## Commands to run the show

### Starbucks attack

Switch off network management apps

	sudo systemctl stop wicd.service
	sudo systemctl stop NetworkManager.service

Put the wireless interface in monitor mode

	sudo airmon-ng start <interface> <channel>

Now you can passively sniff cleartext network traffic on the selected
channel, e.g., using Wireshark. Just let the victim browse a service
that sends passwords over http, and sniff the contents.

This attack obviously fails for websites that redirect to https, such
as Facebook.

### DNS hijacking attack

The goal of this attack is to circumvent the redirection to https by
serving a phish of the target site.  Strict Transport Security blocks
the attack on modern browsers by redirecting to https anyway: since we
can only serve a self-signed certificate, the browser error message
should be sufficient to block the attack.  There are at least three
ways in which this attack can succeed, nevertheless:

- Browser is old (e.g., IE 10);
- Browser has never visited the website before;
- Website does not activate STS: this is a moving target
  (the redirect to https must not be in the browser's cache, however).

To run the show, stop monitoring on the wireless interface

	sudo airmon-ng stop <interface>mon

Create an access point on the wireless interface

	sudo create_ap --redirect-to-localhost --config create_ap.conf

To start the phishing HTTP(S) server, be sure to allow lighttpd to
listen on priviledged ports

	sudo setcap 'cap_net_bind_service=+ep' /usr/bin/lighttpd

then run lighttpd with

	lighttpd -f lighttpd.conf -D

Every HTTP(s) request is now redirected to your local phishing server.
