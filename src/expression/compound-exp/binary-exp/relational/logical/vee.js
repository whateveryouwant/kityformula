/**
 * "⋁"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        VeeOperator = require( "operator/binary-opr/relational/logical/vee" );

    return kity.createClass( 'VeeExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new VeeOperator() );

        }

    } );

} );
