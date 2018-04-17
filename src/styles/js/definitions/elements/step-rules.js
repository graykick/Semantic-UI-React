/**
 * This file began as a direct copy of the less definition file.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

// /*******************************
//              Step
// *******************************/
// 
// /*--------------
//    Load Theme
// ---------------*/
// 
// @type    : 'element';
// @element : 'step';
// 
// @import (multiple) '../../theme.config';
// 
// /*******************************
//             Plural
// *******************************/
// 
// .ui.steps {
//   display: inline-flex;
//   flex-direction: row;
//   align-items: stretch;
//   margin: @stepMargin;
//   background: @stepsBackground;
//   box-shadow: @stepsBoxShadow;
//   line-height: @lineHeight;
//   border-radius: @stepsBorderRadius;
//   border: @stepsBorder;
// }
// 
// /* First Steps */
// .ui.steps:first-child {
//   margin-top: 0em;
// }
// 
// /* Last Steps */
// .ui.steps:last-child {
//   margin-bottom: 0em;
// }
// 
// 
// /*******************************
//            Singular
// *******************************/
// 
// .ui.steps .step {
//   position: relative;
//   display: flex;
//   flex: 1 0 auto;
//   flex-wrap: wrap;
//   flex-direction: row;
//   vertical-align: middle;
//   align-items: center;
//   justify-content: @justifyContent;
// 
//   margin: @verticalMargin @horizontalMargin;
//   padding: @verticalPadding @horizontalPadding;
//   background: @background;
//   color: @textColor;
//   box-shadow: @boxShadow;
//   border-radius: @borderRadius;
//   border: @border;
//   border-right: @divider;
//   transition: @transition;
// }
// 
// /* Arrow */
// .ui.steps .step:after {
//   display: none;
//   position: absolute;
//   z-index: 2;
//   content: '';
//   top: @arrowTopOffset;
//   right: @arrowRightOffset;
//   border: medium none;
//   background-color: @arrowBackgroundColor;
//   width: @arrowSize;
//   height: @arrowSize;
// 
//   border-style: solid;
//   border-color: @borderColor;
//   border-width: @arrowBorderWidth;
// 
//   transition: @transition;
//   transform: translateY(-50%) translateX(50%) rotate(-45deg);
// }
// 
// /* First Step */
// .ui.steps .step:first-child {
//   padding-left: @horizontalPadding;
//   border-radius: @stepsBorderRadius 0em 0em @stepsBorderRadius;
// }
// 
// /* Last Step */
// .ui.steps .step:last-child {
//   border-radius: 0em @stepsBorderRadius @stepsBorderRadius 0em;
// }
// .ui.steps .step:last-child {
//   border-right: none;
//   margin-right: 0em;
// }
// 
// /* Only Step */
// .ui.steps .step:only-child {
//   border-radius: @stepsBorderRadius;
// }
// 
// 
// /*******************************
//             Content
// *******************************/
// 
// /* Title */
// .ui.steps .step .title {
//   font-family: @titleFontFamily;
//   font-size: @titleFontSize;
//   font-weight: @titleFontWeight;
// }
// .ui.steps .step > .title {
//   width: 100%;
// }
// 
// /* Description */
// .ui.steps .step .description {
//   font-weight: @descriptionFontWeight;
//   font-size: @descriptionFontSize;
//   color: @descriptionColor;
// }
// .ui.steps .step > .description {
//   width: 100%;
// }
// .ui.steps .step .title ~ .description {
//   margin-top: @descriptionDistance;
// }
// 
// /* Icon */
// .ui.steps .step > .icon {
//   line-height: 1;
//   font-size: @iconSize;
//   margin: 0em @iconDistance 0em 0em;
// }
// .ui.steps .step > .icon,
// .ui.steps .step > .icon ~ .content {
//   display: block;
//   flex: 0 1 auto;
//   align-self: @iconAlign;
// }
// .ui.steps .step > .icon ~ .content {
//   flex-grow: 1 0 auto;
// }
// 
// /* Horizontal Icon */
// .ui.steps:not(.vertical) .step > .icon {
//   width: auto;
// }
// 
// /* Link */
// .ui.steps .link.step,
// .ui.steps a.step {
//   cursor: pointer;
// }
// 
// /*******************************
//             Types
// *******************************/
// 
// /*--------------
//      Ordered
// ---------------*/
// 
// .ui.ordered.steps {
//   counter-reset: ordered;
// }
// .ui.ordered.steps .step:before {
//   display: block;
//   position: static;
//   text-align: center;
//   content: counters(ordered, ".");
//   align-self: @iconAlign;
//   margin-right: @iconDistance;
//   font-size: @iconSize;
//   counter-increment: ordered;
//   font-family: @orderedFontFamily;
//   font-weight: @orderedFontWeight;
// }
// 
// .ui.ordered.steps .step > * {
//   display: block;
//   align-self: @iconAlign;
// }
// 
// 
// /*--------------
//     Vertical
// ---------------*/
// 
// .ui.vertical.steps {
//   display: inline-flex;
//   flex-direction: column;
//   overflow: visible;
// }
// .ui.vertical.steps .step {
//   justify-content: flex-start;
//   border-radius: @borderRadius;
//   padding: @verticalPadding @horizontalPadding;
//   border-right: none;
//   border-bottom: @verticalDivider;
// }
// .ui.vertical.steps .step:first-child {
//   padding: @verticalPadding @horizontalPadding;
//   border-radius: @stepsBorderRadius @stepsBorderRadius 0em 0em;
// }
// .ui.vertical.steps .step:last-child {
//   border-bottom: none;
//   border-radius: 0em 0em @stepsBorderRadius @stepsBorderRadius;
// }
// .ui.vertical.steps .step:only-child {
//   border-radius: @stepsBorderRadius;
// }
// 
// 
// /* Arrow */
// .ui.vertical.steps .step:after {
//   display: none;
// }
// .ui.vertical.steps .step:after {
//   top: @verticalArrowTopOffset;
//   right: @verticalArrowRightOffset;
//   border-width: @verticalArrowBorderWidth;
// }
// 
// .ui.vertical.steps .step:after {
//   display: @verticalArrowDisplay;
// }
// .ui.vertical.steps .active.step:after {
//   display: @verticalActiveArrowDisplay;
// }
// .ui.vertical.steps .step:last-child:after {
//   display: @verticalLastArrowDisplay;
// }
// .ui.vertical.steps .active.step:last-child:after {
//   display: @verticalActiveLastArrowDisplay;
// }
// 
// 
// /*---------------
//     Responsive
// ----------------*/
// 
// /* Mobile (Default) */
// @media only screen and (max-width: (@largestMobileScreen)) {
// 
//   .ui.steps:not(.unstackable) {
//     display: inline-flex;
//     overflow: visible;
//     flex-direction: column;
//   }
//   .ui.steps:not(.unstackable) .step {
//     width: 100% !important;
//     flex-direction: column;
//     border-radius: @borderRadius;
//     padding: @verticalPadding @horizontalPadding;
//   }
//   .ui.steps:not(.unstackable) .step:first-child {
//     padding: @verticalPadding @horizontalPadding;
//     border-radius: @stepsBorderRadius @stepsBorderRadius 0em 0em;
//   }
//   .ui.steps:not(.unstackable) .step:last-child {
//     border-radius: 0em 0em @stepsBorderRadius @stepsBorderRadius;
//   }
// 
//   /* Arrow */
//   .ui.steps:not(.unstackable) .step:after {
//     display: none !important;
//   }
// 
//   /* Content */
//   .ui.steps:not(.unstackable) .step .content {
//     text-align: center;
//   }
// 
//   /* Icon */
//   .ui.steps:not(.unstackable) .step > .icon,
//   .ui.ordered.steps:not(.unstackable) .step:before {
//     margin: 0em 0em @mobileIconDistance 0em;
//   }
// 
// }
// 
// /*******************************
//              States
// *******************************/
// 
// /* Link Hover */
// .ui.steps .link.step:hover::after,
// .ui.steps .link.step:hover,
// .ui.steps a.step:hover::after,
// .ui.steps a.step:hover {
//   background: @hoverBackground;
//   color: @hoverColor;
// }
// 
// /* Link Down */
// .ui.steps .link.step:active::after,
// .ui.steps .link.step:active,
// .ui.steps a.step:active::after,
// .ui.steps a.step:active {
//   background: @downBackground;
//   color: @downColor;
// }
// 
// /* Active */
// .ui.steps .step.active {
//   cursor: auto;
//   background: @activeBackground;
// }
// .ui.steps .step.active:after {
//   background: @activeBackground;
// }
// .ui.steps .step.active .title {
//   color: @activeColor;
// }
// .ui.ordered.steps .step.active:before,
// .ui.steps .active.step .icon {
//   color: @activeIconColor;
// }
// 
// /* Active Arrow */
// .ui.steps .step:after {
//   display: @arrowDisplay;
// }
// .ui.steps .active.step:after {
//   display: @activeArrowDisplay;
// }
// .ui.steps .step:last-child:after {
//   display: @lastArrowDisplay;
// }
// .ui.steps .active.step:last-child:after {
//   display: @activeLastArrowDisplay;
// }
// 
// /* Active Hover */
// .ui.steps .link.active.step:hover::after,
// .ui.steps .link.active.step:hover,
// .ui.steps a.active.step:hover::after,
// .ui.steps a.active.step:hover {
//   cursor: pointer;
//   background: @activeHoverBackground;
//   color: @activeHoverColor;
// }
// 
// /* Completed */
// .ui.steps .step.completed > .icon:before,
// .ui.ordered.steps .step.completed:before {
//   color: @completedColor;
// }
// 
// /* Disabled */
// .ui.steps .disabled.step {
//   cursor: auto;
//   background: @disabledBackground;
//   pointer-events: none;
// }
// .ui.steps .disabled.step,
// .ui.steps .disabled.step .title,
// .ui.steps .disabled.step .description {
//   color: @disabledColor;
// }
// .ui.steps .disabled.step:after {
//   background: @disabledBackground;
// }
// 
// 
// /*******************************
//            Variations
// *******************************/
// 
// 
// /*--------------
//    Stackable
// ---------------*/
// 
// /* Tablet Or Below */
// @media only screen and (max-width: @largestTabletScreen) {
// 
// .ui[class*="tablet stackable"].steps {
//   display: inline-flex;
//   overflow: visible;
//   flex-direction: column;
// }
// 
// /* Steps */
// .ui[class*="tablet stackable"].steps .step {
//   flex-direction: column;
//   border-radius: @borderRadius;
//   padding: @verticalPadding @horizontalPadding;
// }
// .ui[class*="tablet stackable"].steps .step:first-child {
//   padding: @verticalPadding @horizontalPadding;
//   border-radius: @stepsBorderRadius @stepsBorderRadius 0em 0em;
// }
// .ui[class*="tablet stackable"].steps .step:last-child {
//   border-radius: 0em 0em @stepsBorderRadius @stepsBorderRadius;
// }
// 
// /* Arrow */
// .ui[class*="tablet stackable"].steps .step:after {
//   display: none !important;
// }
// 
// /* Content */
// .ui[class*="tablet stackable"].steps .step .content {
//   text-align: center;
// }
// 
// /* Icon */
// .ui[class*="tablet stackable"].steps .step > .icon,
// .ui[class*="tablet stackable"].ordered.steps .step:before {
//   margin: 0em 0em @mobileIconDistance 0em;
// }
// 
// }
// 
// /*--------------
//       Fluid
// ---------------*/
// 
// /* Fluid */
// .ui.fluid.steps {
//   display: flex;
//   width: 100%;
// }
// 
// /*--------------
//     Attached
// ---------------*/
// 
// /* Top */
// .ui.attached.steps {
//   width: @attachedWidth !important;
//   margin: 0em @attachedHorizontalOffset @attachedVerticalOffset;
//   max-width: @attachedWidth;
//   border-radius: @stepsBorderRadius @stepsBorderRadius 0em 0em;
// }
// .ui.attached.steps .step:first-child {
//   border-radius: @stepsBorderRadius 0em 0em 0em;
// }
// .ui.attached.steps .step:last-child {
//   border-radius: 0em @stepsBorderRadius 0em 0em;
// }
// 
// /* Bottom */
// .ui.bottom.attached.steps {
//   margin: @attachedVerticalOffset @attachedHorizontalOffset 0em;
//   border-radius: 0em 0em @stepsBorderRadius @stepsBorderRadius;
// }
// .ui.bottom.attached.steps .step:first-child {
//   border-radius: 0em 0em 0em @stepsBorderRadius;
// }
// .ui.bottom.attached.steps .step:last-child {
//   border-radius: 0em 0em @stepsBorderRadius 0em;
// }
// 
// /*-------------------
//     Evenly Divided
// --------------------*/
// 
// .ui.one.steps,
// .ui.two.steps,
// .ui.three.steps,
// .ui.four.steps,
// .ui.five.steps,
// .ui.six.steps,
// .ui.seven.steps,
// .ui.eight.steps {
//   width: 100%;
// }
// .ui.one.steps > .step,
// .ui.two.steps > .step,
// .ui.three.steps > .step,
// .ui.four.steps > .step,
// .ui.five.steps > .step,
// .ui.six.steps > .step,
// .ui.seven.steps > .step,
// .ui.eight.steps > .step {
//   flex-wrap: nowrap;
// }
// .ui.one.steps > .step {
//   width: 100%;
// }
// .ui.two.steps > .step {
//   width: 50%;
// }
// .ui.three.steps > .step {
//   width: 33.333%;
// }
// .ui.four.steps > .step {
//   width: 25%;
// }
// .ui.five.steps > .step {
//   width: 20%;
// }
// .ui.six.steps > .step {
//   width: 16.666%;
// }
// .ui.seven.steps > .step {
//   width: 14.285%;
// }
// .ui.eight.steps > .step {
//   width: 12.500%;
// }
// 
// /*-------------------
//        Sizes
// --------------------*/
// 
// 
// .ui.mini.steps .step,
// .ui.mini.step {
//   font-size: @mini;
// }
// .ui.tiny.steps .step,
// .ui.tiny.step {
//   font-size: @tiny;
// }
// .ui.small.steps .step,
// .ui.small.step {
//   font-size: @small;
// }
// .ui.steps .step,
// .ui.step {
//   font-size: @medium;
// }
// .ui.large.steps .step,
// .ui.large.step {
//   font-size: @large;
// }
// .ui.big.steps .step,
// .ui.big.step {
//   font-size: @big;
// }
// .ui.huge.steps .step,
// .ui.huge.step {
//   font-size: @huge;
// }
// .ui.massive.steps .step,
// .ui.massive.step {
//   font-size: @massive;
// }
// 
// 
// .loadUIOverrides();
// 
