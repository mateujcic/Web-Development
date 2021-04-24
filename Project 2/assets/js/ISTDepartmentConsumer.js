/**
 * A client that sends HTTP requests to consume the IST Department Web Service. 
 */
export class ISTDepartmentConsumer {

    /**
     * Sends a request for a resource. As as of jQuery 1.5 the returned jqXHR object 
     * implements the Promise interface, giving it all the properties, methods, 
     * and behavior of a Promise:
     *      - jqXHR.done(function( data, textStatus, jqXHR ) {}); 
     *        is invoked, if the request succeeds. It receives the returned data, 
     *        a string containing the success code, and the jqXHR object.
     *      - jqXHR.fail(function( jqXHR, textStatus, errorThrown ) {});
     *        is invoked, if the request fails. It receives the jqXHR, a string 
     *        indicating the error type, and an exception object if applicable.
     *      - jqXHR.always(function( data|jqXHR, textStatus, jqXHR|errorThrown ) { }); 
     *        fires when the request finishes, whether in failure or success. 
     *        In response to a successful request, the function's arguments are:
     *        data, textStatus, and the jqXHR object. For failed requests the arguments 
     *        are: the jqXHR object, textStatus, and errorThrown. 
     *        
     * See {@link https://api.jquery.com/jQuery.ajax jQuery AJAX}.
     *        
     * @type {Object} A set of key/value pairs that configure the Ajax request.
     * 
     * @param {String} The resource endpoint/path
     * @param {String} The ID of the HTML element that requires the loader.
     * @returns {jqXHR} A superset of the XMLHTTPRequest object that mplements the Promise interface. 
     */
    static getData(resourcePath) {
        let jqXHR = $.ajax({
            method: 'GET',
            dataType: 'json',
            data: {path: resourcePath},
            cache: false,
            async: true,
            url: './assets/proxy.php',
        }).always(function () {
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('ERROR while processing request: ');
            console.log(jqXHR);
        });

        return jqXHR;
    }
}


