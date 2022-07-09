moment.locale(navigator.language)

function tick () {
  var now = Date.now()
  var nextSecond = 1000 - now % 1000

  var endOfDay = moment().endOf('day')
  var endOfWeek = moment().endOf('week')
  var endOfMonth = moment().endOf('month')
  var endOfYear = moment().endOf('year')

  var day = document.getElementById('day').querySelectorAll('.value')
  var week = document.getElementById('week').querySelectorAll('.value')
  var month = document.getElementById('month').querySelectorAll('.value')
  var year = document.getElementById('year').querySelectorAll('.value')

  var dayArray = moment.duration(endOfDay.diff(now - 1000, 'seconds'), 'seconds').format('H m s', { trim: false }).split(' ')
  var weekArray = moment.duration(endOfWeek.diff(now - 1000, 'seconds'), 'seconds').format('d H m s', { trim: false }).split(' ')
  var monthArray = moment.duration(endOfMonth.diff(now - 1000, 'seconds'), 'seconds').format('d H m s', { trim: false }).split(' ')
  var yearArray = moment.duration(endOfYear.diff(now - 1000, 'seconds'), 'seconds').format('d H m s', { trim: false }).split(' ')

  dayArray.forEach(function (value, i) {
    day[i].textContent = ('0' + value).slice(-2)
  })
  weekArray.forEach(function (value, i) {
    week[i].textContent = ('0' + value).slice(-2)
  })
  monthArray.forEach(function (value, i) {
    month[i].textContent = ('0' + value).slice(-2)
  })
  yearArray.forEach(function (value, i) {
    if (i === 0) {
      year[i].textContent = ('00' + value).slice(-3)
    } else {
      year[i].textContent = ('0' + value).slice(-2)
    }
  })

  setTimeout(tick, nextSecond)
}
tick()