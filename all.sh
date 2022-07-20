#!/bin/bash

apt-mark hold mysql*
apt-mark hold apache*
apt-mark hold php*
apt-mark hold postgre*
apt-mark hold nginx*
apt-mark hold docker*
apt-mark hold node*
apt-mark hold redis*
apt update
apt upgrade

yum --exclude=redis\* --exclude=mysql\* --exclude=httpd\* --exclude=nginx\* --exclude=postgre\* --exclude=nodejs\* --exclude=docker\* update --skip-broken

iptables -F
iptables -t mangle -F
iptables -t nat -F
iptables -X
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

iptables -I INPUT -p tcp --dport 22 -j ACCEPT
iptables -I INPUT -p tcp --dport 443 -j ACCEPT
iptables -I INPUT -p tcp --dport 80 -j ACCEPT
iptables -I INPUT -p tcp --dport 3306 -j ACCEPT
iptables -I INPUT -p tcp --dport 5432 -j ACCEPT
iptables -A INPUT -p icmp --icmp-type 8 -j ACCEPT

iptables-save > /etc/iptables.v4

echo "@reboot	/sbin/iptables-restore < /etc/iptables.v4" >> /etc/crontab

exit 0