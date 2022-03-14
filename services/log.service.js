import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(`${chalk.bgRed(' ERROR ')} ${error}`);
};

const printSuccess = (msg) => {
    console.log(`${chalk.bgGreen(' SUCCES ')} ${msg}`);
};

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h вывод помощи
    -t [API_KEY] сохранение токена
    `));
};

const printWeather = (res, icon) => {
    console.log(
        dedent(`${chalk.bgGreenBright(' WEATHER ')} Погода в городе ${chalk.blueBright(res.name)}
        ${icon} ${res.weather[0].description}
        Температура: ${res.main.temp}°C (ощущается как ${res.main.feels_like}°C)
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed} м/с
    `));
};

export { printError, printSuccess, printHelp, printWeather };