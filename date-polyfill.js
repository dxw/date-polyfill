jQuery(function ($) {
    'use strict';

    if (typeof Modernizr === 'undefined' || typeof Modernizr.inputtypes === 'undefined') {
        console.warn('date-polyfill: Modenizr must be loaded including the inputtypes option')
        return
    }

    if (Modernizr.inputtypes.date) {
        // Our work here is done
        return
    }

    $('input[type="date"]').each(function () {
        var $this = $(this)
          , humanInput = $(document.createElement('input'))

        humanInput.attr('type', 'text')

        humanInput.datepicker({
            altField: $this,
            altFormat: 'yy-mm-dd',
            dateFormat: 'd MM yy',
        })

        humanInput.datepicker('setDate', Date.parse($this.val()))

        $this.before(humanInput)
    })
})
