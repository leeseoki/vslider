vSlider
=====================
This is s simple Slider component for Magento 2.

Facts
-----
- version: 0.0.1

Requirements
------------
- https://devdocs.magento.com/guides/v2.3/install-gde/system-requirements.html

Compatibility
-------------
- Magento >= 2.3

Installation Instructions
-------------------------
1. Create database
2. Clone repo to your serve
3. cd to vslider folder which you just cloned
4. Setup magento by running this cmd:
php bin/magento setup:install --base-url=http://vslider.local --db-host=localhost --db-name=vSlider --db-user=root --db-password="" --backend-frontname=admin --admin-firstname=admin --admin-lastname=admin --admin-email=admin@admin.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1
5. Flush cache magento by running this cmd: php bin/magento cache:clean

Uninstallation
--------------
1. Remove all extension files from your Magento installation (app/code/Van)
2. Run those cmd:
php bin/magento setup:upgrade
php bin/magento cache:clean

