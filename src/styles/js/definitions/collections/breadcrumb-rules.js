/**
 * This file began as a direct copy of the less definition file.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

// /*******************************
//             Theme
// *******************************/
// 
// @type    : 'collection';
// @element : 'breadcrumb';
// 
// @import (multiple) '../../theme.config';
// 
// 
// /*******************************
//            Breadcrumb
// *******************************/
// 
// .ui.breadcrumb {
//   line-height: 1;
//   display: @display;
//   margin: @verticalMargin 0em;
//   vertical-align: @verticalAlign;
// }
// .ui.breadcrumb:first-child {
//   margin-top: 0em;
// }
// .ui.breadcrumb:last-child {
//   margin-bottom: 0em;
// }
// 
// /*******************************
//           Content
// *******************************/
// 
// /* Divider */
// .ui.breadcrumb .divider {
//   display: inline-block;
//   opacity: @dividerOpacity;
//   margin: 0em @dividerSpacing 0em;
// 
//   font-size: @dividerSize;
//   color: @dividerColor;
//   vertical-align: @dividerVerticalAlign;
// }
// 
// /* Link */
// .ui.breadcrumb a {
//   color: @linkColor;
// }
// .ui.breadcrumb a:hover {
//   color: @linkHoverColor;
// }
// 
// 
// /* Icon Divider */
// .ui.breadcrumb .icon.divider {
//   font-size: @iconDividerSize;
//   vertical-align: @iconDividerVerticalAlign;
// }
// 
// /* Section */
// .ui.breadcrumb a.section {
//   cursor: pointer;
// }
// .ui.breadcrumb .section {
//   display: inline-block;
//   margin: @sectionMargin;
//   padding: @sectionPadding;
// }
// 
// /* Loose Coupling */
// .ui.breadcrumb.segment {
//   display: inline-block;
//   padding: @segmentPadding;
// }
// 
// /*******************************
//             States
// *******************************/
// 
// .ui.breadcrumb .active.section {
//   font-weight: @activeFontWeight;
// }
// 
// 
// /*******************************
//            Variations
// *******************************/
// 
// .ui.mini.breadcrumb {
//   font-size: @mini;
// }
// .ui.tiny.breadcrumb {
//   font-size: @tiny;
// }
// .ui.small.breadcrumb {
//   font-size: @small;
// }
// .ui.breadcrumb {
//   font-size: @medium;
// }
// .ui.large.breadcrumb {
//   font-size: @large;
// }
// .ui.big.breadcrumb {
//   font-size: @big;
// }
// .ui.huge.breadcrumb {
//   font-size: @huge;
// }
// .ui.massive.breadcrumb {
//   font-size: @massive;
// }
// 
// .loadUIOverrides();
// 
