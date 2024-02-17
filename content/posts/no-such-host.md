+++
title = 'Fixing "Startup failed: proxy: udp: listen udp: lookup localhost on <ip>:53: no such host" Error'
date = 2024-02-16T22:35:02+07:00
toc = false
+++

```
Startup failed: proxy: udp: listen udp: lookup localhost on <ip>:53: no such host
``` 
This indicates that a program trying to start encountered an issue resolving the hostname `localhost` on port 53, which is typically used for DNS (Domain Name System) lookup. For example, I got an error when trying to start NextDNS service on my computer.
```
Feb 16 21:53:01 void systemd[1]: Started NextDNS DNS53 to DoH proxy..
Feb 16 21:53:01 void nextdns[593]: Starting NextDNS 1.42.0/linux on localhost:53
Feb 16 21:53:01 void nextdns[593]: Listening on TCP/localhost:53
Feb 16 21:53:01 void nextdns[593]: Listening on UDP/localhost:53
Feb 16 21:53:01 void nextdns[593]: Network not yet ready, waiting
Feb 16 21:53:01 void nextdns[593]: Listening on TCP/localhost:53
Feb 16 21:53:01 void nextdns[593]: Listening on UDP/localhost:53
Feb 16 21:53:01 void nextdns[593]: Network not yet ready, waiting
Feb 16 21:53:01 void nextdns[593]: Listening on TCP/localhost:53
Feb 16 21:53:01 void nextdns[593]: Listening on UDP/localhost:53
Feb 16 21:53:01 void nextdns[593]: Network not yet ready, waiting
Feb 16 21:53:02 void nextdns[593]: Listening on TCP/localhost:53
Feb 16 21:53:02 void nextdns[593]: Listening on UDP/localhost:53
Feb 16 21:53:02 void nextdns[593]: Network not yet ready, waiting
Feb 16 21:53:02 void nextdns[593]: Listening on TCP/localhost:53
Feb 16 21:53:02 void nextdns[593]: Listening on UDP/localhost:53
Feb 16 21:53:02 void nextdns[593]: Network not yet ready, waiting
Feb 16 21:53:04 void nextdns[593]: Listening on TCP/localhost:53
Feb 16 21:53:04 void nextdns[593]: Listening on UDP/localhost:53
Feb 16 21:53:04 void nextdns[593]: Startup failed: proxy: udp: listen udp: lookup localhost on <ip>:53: no such host
Feb 16 21:53:04 void nextdns[593]: Error: proxy: udp: listen udp: lookup localhost on <ip>:53: no such host
Feb 16 21:53:04 void systemd[1]: nextdns.service: Main process exited, code=exited, status=1/FAILURE
Feb 16 21:53:04 void systemd[1]: nextdns.service: Failed with result 'exit-code'.
```

# Workarounds
First, if you use `systemd`, disable `systemd-resolved`. This system setting can interfere with what you're about to do. Disabling it gives you more control over your network configuration.

- Check `/etc/hosts`
```
> cat /etc/hosts
# Static table lookup for hostnames.
# See hosts(5) for details.
 

```
You can see there's no configuration on my `/etc/hosts`, if you have the same output, add this code to your `/etc/hosts` file:
```
127.0.0.1   localhost
::1         localhost
127.0.1.1   yourhostname.localdomain  yourhostname
```

It should be like this
```
> cat /etc/hosts
# Static table lookup for hostnames.
# See hosts(5) for details.

127.0.0.1   localhost
::1         localhost
127.0.1.1   yourhostname.localdomain  yourhostname
```
Here's the result

```
Feb 16 22:05:09 void systemd[1]: Started NextDNS DNS53 to DoH proxy..
Feb 16 22:05:09 void nextdns[6231]: Starting NextDNS 1.42.0/linux on localhost:53
Feb 16 22:05:09 void nextdns[6231]: Listening on TCP/[::1]:53
Feb 16 22:05:09 void nextdns[6231]: Listening on TCP/127.0.0.1:53
Feb 16 22:05:09 void nextdns[6231]: Listening on UDP/[::1]:53
Feb 16 22:05:09 void nextdns[6231]: Listening on UDP/127.0.0.1:53
```