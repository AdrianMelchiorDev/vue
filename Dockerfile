FROM php:7.3.13-apache

# Pakete hinzufügen
RUN apt-get update \
 && apt-get install -y git libpng-dev libzip-dev zlib1g-dev libicu-dev gettext imagemagick zip unzip locales

# PHP extensions
RUN docker-php-ext-install pdo pdo_mysql intl gettext gd zip exif opcache

# Set the locale
RUN sed -i -e 's/# de_DE.UTF-8 UTF-8/de_DE.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen
ENV LANG de_DE.UTF-8  
ENV LANGUAGE de_DE:de
ENV LC_ALL de_DE.UTF-8

# Apache von html nach public konfigurieren
RUN a2enmod rewrite \
 && sed -i 's!/var/www/html!/var/www/public!g' /etc/apache2/sites-available/000-default.conf

# autorise .htaccess files
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# install composer
RUN curl -sS https://getcomposer.org/installer \
  | php -- --install-dir=/usr/local/bin --filename=composer

# install node
RUN apt-get install -y gnupg
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
 && apt-get install -y nodejs
#RUN apt-get install git
#RUN git clone https://github.com/cloudhead/vows.git
#RUN cd vows
#RUN npm install

# install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get install apt-transport-https
RUN apt-get update && apt-get install yarn

#RUN pecl install xdebug-2.7.2
#RUN docker-php-ext-enable xdebug
#RUN echo 'xdebug.default_enable=0' >> /usr/local/etc/php/php.ini
#RUN echo 'xdebug.remote_enable=1' >> /usr/local/etc/php/php.ini
#RUN echo 'xdebug.remote_connect_back=0' >> /usr/local/etc/php/php.ini
#RUN echo 'error_reporting=E_ALL' >> /usr/local/etc/php/php.ini
RUN echo 'upload_max_filesize=20M' >> /usr/local/etc/php/php.ini
RUN echo 'post_max_size=20M' >> /usr/local/etc/php/php.ini
RUN echo 'max_execution_time=600' >> /usr/local/etc/php/php.ini
RUN echo 'memory_limit=512M' >>  /usr/local/etc/php/php.ini

COPY ./.docker_bash_history /root/.bash_history
WORKDIR /var/www
