/* global jQuery */
/**
 * dxw's simple date input polyfill
 */

jQuery(function ($) {
  'use strict'

  var Pikaday = require('pikaday')
  var moment = require('moment')

  // http://stackoverflow.com/a/10199306/55654
  var inputTypeDateSupported = function () {
    var input = document.createElement('input')
    input.setAttribute('type', 'date')

    var notADateValue = 'not-a-date'
    input.setAttribute('value', notADateValue)

    return (input.value !== notADateValue)
  }

  if (inputTypeDateSupported()) {
    // Our work here is done
    return
  }

  $('input[type="date"]').each(function () {
    var $this = $(this)
    var humanInput = $(document.createElement('input'))
    var format = $this.attr('data-format')

    if (typeof format === 'undefined') {
      format = 'LL'
    }

    humanInput.attr('type', 'date')

    // Copy some attributes
    humanInput.attr('class', $this.attr('class'))

    // Set up datepicker
    var picker = new Pikaday({
      field: humanInput.get(0),
      format: format,
      onSelect: function (date) {
        $this.val(picker.toString('YYYY-MM-DD'))
      }
    })

    // Set current date if it's already populated
    // Modern browsers can Date.parse(2014-08-12), but IE8 can't
    var match = $this.val().match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (match) {
      // Do this manually ...
      humanInput.val(moment($this.val()).format(format))
      picker.gotoDate($this.val())

      // ... because this does not work in IE8
      picker.setDate($this.val())
    }

    // Add classes
    humanInput.addClass('date-polyfill-new-field')
    $this.addClass('date-polyfill-original-field')

    $this.css('display', 'none')

    // Add it to the DOM
    $this.before(humanInput)
  })
})
