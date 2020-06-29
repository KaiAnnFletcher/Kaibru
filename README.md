# Kaibru

*Project Description:* Kaibru specifically is being designed as a one-stop hub for users to browse sustainable products and services via tapping into open APIs or web-scraping.

*Core Responsibilities:* Principal Developer

*Tools/languages used:* HTML5, CSS/Bootstrap, JavaScript/jQuery, React.js, Sequelize

This project has a working sequelize back-end (version ^6.0.0).

Alot of websites using shopify, bigcommerce or woocommerce platforms cannot be scraped. Those websites that return data to the console have undefined attributes. This does not work with a sequelize findCreateFind function. This function is needed to ensure data is not duplicated in the database.

At the same time, the data simply does not save because the website being scraped returns undefined attributes which the sequelize library recognizes as invalid. As a result, they do not get stored to the database.