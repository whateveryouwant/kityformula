/**
 * "≰"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'NotLeOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M4.393,21.602h9.433c0.432,0,0.84,0,0.84,0.48s-0.48,0.48-0.888,0.48H3.984L2.568,25.97   c-0.144,0.336-0.24,0.576-0.552,0.576c-0.288,0-0.48-0.216-0.48-0.48c0-0.24,1.2-3,1.416-3.504H0.888c-0.408,0-0.888,0-0.888-0.48   s0.408-0.48,0.84-0.48h2.497l3.072-7.321l-5.905-2.784C0.24,11.377,0,11.257,0,10.945c0-0.264,0.192-0.408,0.504-0.552L9.841,6   l2.448-5.857C12.385,0.048,12.505,0,12.649,0c0.288,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.144,0.456L11.137,5.4l2.592-1.248   c0.12-0.072,0.288-0.144,0.456-0.144c0.264,0,0.48,0.192,0.48,0.48s-0.144,0.336-0.528,0.528L10.585,6.72l-2.952,7.081l6.504,3.048   c0.36,0.192,0.528,0.264,0.528,0.576c0,0.24-0.216,0.48-0.48,0.48c-0.144,0-1.176-0.504-3.288-1.512l-3.648-1.704L4.393,21.602z    M1.608,10.945l5.161,2.448l2.52-6.073L1.608,10.945z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "NotLe" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );