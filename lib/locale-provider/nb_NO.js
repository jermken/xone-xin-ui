'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _nb_NO = require('rc-pagination/lib/locale/nb_NO');

var _nb_NO2 = _interopRequireDefault(_nb_NO);

var _nb_NO3 = require('../date-picker/locale/nb_NO');

var _nb_NO4 = _interopRequireDefault(_nb_NO3);

var _nb_NO5 = require('../time-picker/locale/nb_NO');

var _nb_NO6 = _interopRequireDefault(_nb_NO5);

var _nb_NO7 = require('../calendar/locale/nb_NO');

var _nb_NO8 = _interopRequireDefault(_nb_NO7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_moment2['default'].locale('nb');
exports['default'] = {
    locale: 'nb',
    DatePicker: _nb_NO4['default'],
    TimePicker: _nb_NO6['default'],
    Calendar: _nb_NO8['default'],
    Pagination: _nb_NO2['default'],
    Table: {
        filterTitle: 'Filtermeny',
        filterConfirm: 'OK',
        filterReset: 'Nullstill',
        emptyText: 'Ingen data',
        selectAll: 'Velg alle',
        selectInvert: 'Inverter valg'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Avbryt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Avbryt'
    },
    Transfer: {
        notFoundContent: 'Ingen treff',
        searchPlaceholder: 'Søk her',
        itemUnit: 'element',
        itemsUnit: 'elementer'
    },
    Select: {
        notFoundContent: 'Ingen treff'
    },
    Upload: {
        uploading: 'Laster opp...',
        removeFile: 'Fjern fil',
        uploadError: 'Feil ved opplastning',
        previewFile: 'Forhåndsvisning'
    }
};
module.exports = exports['default'];