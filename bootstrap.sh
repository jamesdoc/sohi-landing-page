#!/usr/bin/env bash

sudo apt-get update

sudo add-apt-repository -y ppa:ondrej/php5
sudo apt-get update

#sudo apt-get -q -y install mysql-server-5.5 php5-mysql php5-gd apache2 php5
sudo apt-get -q -y install apache2 php5

# Configure apache to look at the correct folder, and enable symlinks

a2enmod rewrite
sed -i '/AllowOverride None/c AllowOverride All' /etc/apache2/sites-available/default
sed -i "s/error_reporting = .*/error_reporting = E_ALL/" /etc/php5/apache2/php.ini
sed -i "s/display_errors = .*/display_errors = On/" /etc/php5/apache2/php.ini
sed -i "s/disable_functions = .*/disable_functions = /" /etc/php5/cli/php.ini
service apache2 restart

echo 'And away we go...'
