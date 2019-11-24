'use sctrict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц', '');
  }
}
start();


let appData = {
  budget: money,
  timeData: prompt,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpensenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
    } else {
      console.log('mistake');
      i--;
    }
  }
}

chooseExpensenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'руб.');

}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Спедний уровеноь достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка!!!');
  }
}
detectLevel();


function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накопления?', ''),
      persent = +prompt('Под какой процент?', '');

    appData.monthIncome = save / 100 / 12 * persent;
    console.log('Ежемесячный доход с вашего депозита: ' + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let a = prompt('Статья необязательных расходов?', '');
    appData.optionalExpenses[i] = a;
  }
  console.log(appData.optionalExpenses);
}
chooseOptExpenses();

