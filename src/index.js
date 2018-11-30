/*global exports, window */
(function (container) {
    'use strict';

    var
        object_datatype = function (data) {
            if (Array.isArray(data)) {
                return 'array';
            } else {
                return 'object';
            }
        },
        number_datatype = function (data) {
            if (Number.isInteger(data) === true) {
                return 'integer';
            } else {
                return 'number';
            }
        },
        simple_datatype = function (data) {
            var type;

            if (isNaN(data) === false) {
                data = +data;
            }

            type = typeof data;
            if (type === 'number') {
                return number_datatype(data);
            } else {
                return type;
            }
        },
        datatype = function (data) {
            var type = typeof data,
                exact = ['boolean', 'symbol'];

            if (data === null) {
                return 'null';
            } else if (Number.isNaN(data)) {
                return 'NaN';
            } else if (exact.indexOf(type) !== -1) {
                return type;
            } else if (type === 'object') {
                return object_datatype(data);
            } else {
                return simple_datatype(data);
            }
        },
        pure = function (data) {
            var type = datatype(data),
                numbers = ['integer', 'number'];

            if (numbers.indexOf(type) !== -1) {
                data = +data;
            }

            return data;
        };

    container.datatype = datatype;
    container.pure = pure;
}(
    window !== 'undefined'
        ? window
        : exports
));
