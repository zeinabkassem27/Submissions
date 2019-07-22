TODO: add readme instructions

##### php artisan api:generate

### Running the application for the first time:
1. Prepare the .env file by creating .env in the back-end directory.
2. Copy the content of .env.example to .env and replace the DB Section with your own
3. Go to back-end directory using the terminal
4. In the terminal run `$ composer install`
5. In the terminal run `$ php artisan migrate --seed` this will add default data into your database
6. In the terminal run `$ php artisan key:generate` 
7. In the terminal run `$ php artisan storage:link` this will create a symbolic link for the storage `back-end/storage/public` to `back-end/public/storage`
8. In the terminal run `$ php artisan serve` this will run the application
9. to login into the default dashboard go to `back-end/config/auth.php` file, and search for the `Authentication Defaults` section.
    Replace 
    ```php
    'defaults' => [
            'guard' => 'api',
            'passwords' => 'users',
        ],
    ```
    with
    ```php
     'defaults' => [
                'guard' => 'web',
                'passwords' => 'users',
        ],
    ```
    
 10. To login using the JWT API go to `back-end/config/auth.php` file, and search for the `Authentication Defaults` section.
    Replace 
    ```php
    'defaults' => [
            'guard' => 'web',
            'passwords' => 'users',
        ],
    ```
    with
    ```php
     'defaults' => [
                'guard' => 'api',
                'passwords' => 'users',
        ],
    ```

### References:
- [Auth Tutorial](https://medium.com/@manuelmauriciozamarrn/implementing-jwt-on-laravel-5-8-edc39f545886)
- [QuickAdminPanel](https://2019.quickadminpanel.com/)
