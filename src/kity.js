/**
 * kity库封包
 */

define( function ( require, exports, module ) {

    if ( !window.kity ) {
        throw new Error( 'Missing Kity Graphic Lib' );
    }

    return window.kity;

} );