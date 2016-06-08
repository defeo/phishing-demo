# A phishing demo

This material illustrates sniffing and phishing attacks on wireless
internet.

## Dependencies

You will need the following software

- [lighttpd](https://www.lighttpd.net/) for serving phished web pages,
- [aircrack-ng](https://www.aircrack-ng.org/) for wifi sniffing,
- [wireshark](https://www.wireshark.org/) for packet analysis,
- [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html),
  [hostap](http://w1.fi/) and
  [create_ap](https://github.com/oblique/create_ap) for creating a
  wireless access point.

## Commands to run the show

To start the phishing HTTP(S) server, be sure to allow lighttpd to
listen on priviledged ports

	sudo setcap 'cap_net_bind_service=+ep' /usr/bin/lighttpd

then run lighttpd with

	lighttpd -f lighttpd.conf -D

Switch off network management apps

	sudo systemctl stop wicd.service
	sudo systemctl stop NetworkManager.service

Put the wireless interface in monitor mode

	sudo airmon-ng start <interface> <channel>

Now you can passively sniff cleartext network traffic on the selected
channel.

Stop monitoring on the wireless interface

	sudo airmon-ng stop <interface>mon

Create an access point on the wireless interface

	sudo create_ap --redirect-to-localhost --config create_ap.conf

Every HTTP(s) request is now redirected to your local phishing server.
