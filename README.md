# web_application_for_finding_job_candidates
![Static Badge](https://img.shields.io/badge/Laravel_Framework-10.26.2-red)
![Static Badge](https://img.shields.io/badge/ReactJS-5.0.1-blue)
![Static Badge](https://img.shields.io/badge/PHP-8.2.3-green)

**web_application_for_finding_job_candidates** - is a web application for workers and employers to find each other. All of them must register, after which they can begin the search. They have the opportunity to either create their own resume/vacancy or find something suitable among the existing ones.

## Installation 
:heavy_exclamation_mark: Before installation, check the relevance or compatibility of versions 

1. Clone repository:
```
git clone https://github.com/aa-ndrey-21/web-application-for-finding-job-candidates.git
```
2. Rename ```.env.example``` to ```.env```
3. Installing PHP dependencies using Composer:
```
composer install
```
4. Generating Laravel Application Key:
```
php artisan key:generate
```
5. Installing Node.js dependencies using npm:
```
npm install
```
6. Update the .env file with your database connection details.
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
7. Performing migrations with initial data:
```
php artisan migrate --seed
```
8. Build application
```
PHP artisan serve --host=(your_localhost) --port=(port)
npm run dev -- --host=(your_localhost)
```
9. Run server (together)
```
PHP artisan serve --host=(your_localhost) --port=(port)
```
```
npm run dev -- --host=(your_localhost)
```
10. Open app on  ```(your_localhost):(port)```


## Example
:one:
After opening the local server, you are taken to a welcome page (not yet finished) where you can proceed to register or log in.  
:two:
Once you complete this step, you will be taken to your profile page. Then you can create your own vacancy/resume, depending on the mode selected during registration.   
:three:
You can also go to view vacancies/resumes already created by other users (at the beginning there will be only those created using --seed).  

## Contributing
Bug reports and/or pull requests are welcome


## Flaws
:x: The start page has not yet been implemented
:x: Adaptive has not yet been implemented

## License
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).