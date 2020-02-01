FROM php:7.0-apache
WORKDIR ./dist/frontend/
COPY . /var/www/html/:z
EXPOSE 80
CMD echo "ServerName localhost" >> /etc/apache2/apache2.conf
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
