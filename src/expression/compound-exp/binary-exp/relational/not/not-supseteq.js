/**
 * "⊉"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotSupseteqOperator = require( "operator/binary-opr/relational/not/not-supseteq" );

    return kity.createClass( 'NotSupseteqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotSupseteqOperator() );

        }

    } );

} );
