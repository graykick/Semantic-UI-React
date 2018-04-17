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
// @element : 'grid';
// 
// @import (multiple) '../../theme.config';
// 
// /*******************************
//             Standard
// *******************************/
// 
// .ui.grid {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: stretch;
//   padding: 0em;
// }
// 
// /*----------------------
//       Remove Gutters
// -----------------------*/
// 
// .ui.grid {
//   margin-top: -(@rowSpacing / 2);
//   margin-bottom: -(@rowSpacing / 2);
//   margin-left: -(@gutterWidth / 2);
//   margin-right: -(@gutterWidth / 2);
// }
// .ui.relaxed.grid  {
//   margin-left: -(@relaxedGutterWidth / 2);
//   margin-right: -(@relaxedGutterWidth / 2);
// }
// .ui[class*="very relaxed"].grid  {
//   margin-left: -(@veryRelaxedGutterWidth / 2);
//   margin-right: -(@veryRelaxedGutterWidth / 2);
// }
// 
// 
// /* Preserve Rows Spacing on Consecutive Grids */
// .ui.grid + .grid {
//   margin-top: @consecutiveGridDistance;
// }
// 
// /*-------------------
//        Columns
// --------------------*/
// 
// /* Standard 16 column */
// .ui.grid > .column:not(.row),
// .ui.grid > .row > .column {
//   position: relative;
//   display: inline-block;
// 
//   width: @oneWide;
//   padding-left: (@gutterWidth / 2);
//   padding-right: (@gutterWidth / 2);
//   vertical-align: top;
// }
// 
// .ui.grid > * {
//   padding-left: (@gutterWidth / 2);
//   padding-right: (@gutterWidth / 2);
// }
// 
// /*-------------------
//         Rows
// --------------------*/
// 
// .ui.grid > .row {
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: inherit;
//   align-items: stretch;
//   width: 100% !important;
//   padding: 0rem;
//   padding-top: (@rowSpacing / 2);
//   padding-bottom: (@rowSpacing / 2);
// }
// 
// /*-------------------
//        Columns
// --------------------*/
// 
// /* Vertical padding when no rows */
// .ui.grid > .column:not(.row) {
//   padding-top: (@rowSpacing / 2);
//   padding-bottom: (@rowSpacing / 2);
// }
// .ui.grid > .row > .column {
//   margin-top: 0em;
//   margin-bottom: 0em;
// }
// 
// /*-------------------
//       Content
// --------------------*/
// 
// .ui.grid > .row > img,
// .ui.grid > .row > .column > img {
//   max-width: @columnMaxImageWidth;
// }
// 
// /*-------------------
//     Loose Coupling
// --------------------*/
// 
// /* Collapse Margin on Consecutive Grid */
// .ui.grid > .ui.grid:first-child {
//   margin-top: 0em;
// }
// .ui.grid > .ui.grid:last-child {
//   margin-bottom: 0em;
// }
// 
// /* Segment inside Aligned Grid */
// .ui.grid .aligned.row > .column > .segment:not(.compact):not(.attached),
// .ui.aligned.grid .column > .segment:not(.compact):not(.attached) {
//   width: 100%;
// }
// 
// /* Align Dividers with Gutter */
// .ui.grid .row + .ui.divider {
//   flex-grow: 1;
//   margin: (@rowSpacing / 2) (@gutterWidth / 2);
// }
// .ui.grid .column + .ui.vertical.divider {
//   height: ~"calc(50% - "(@rowSpacing/2)~")";
// }
// 
// /* Remove Border on Last Horizontal Segment */
// .ui.grid > .row > .column:last-child > .horizontal.segment,
// .ui.grid > .column:last-child > .horizontal.segment {
//   box-shadow: none;
// }
// 
// /*******************************
//            Variations
// *******************************/
// 
// 
// /*-----------------------
//        Page Grid
// -------------------------*/
// 
// @media only screen and (max-width: @largestMobileScreen) {
//   .ui.page.grid {
//     width: @mobileWidth;
//     padding-left: @mobileGutter;
//     padding-right: @mobileGutter;
//     margin-left: 0em;
//     margin-right: 0em;
//   }
// }
// @media only screen and (min-width: @tabletBreakpoint) and (max-width: @largestTabletScreen) {
//   .ui.page.grid {
//     width: @tabletWidth;
//     margin-left: @tabletMargin;
//     margin-right: @tabletMargin;
//     padding-left: @tabletGutter;
//     padding-right: @tabletGutter;
//   }
// }
// @media only screen and (min-width: @computerBreakpoint) and (max-width: @largestSmallMonitor) {
//   .ui.page.grid {
//     width: @computerWidth;
//     margin-left: @computerMargin;
//     margin-right: @computerMargin;
//     padding-left: @computerGutter;
//     padding-right: @computerGutter;
//   }
// }
// @media only screen and (min-width: @largeMonitorBreakpoint) and (max-width: @largestLargeMonitor) {
//   .ui.page.grid {
//     width: @largeMonitorWidth;
//     margin-left: @largeMonitorMargin;
//     margin-right: @largeMonitorMargin;
//     padding-left: @largeMonitorGutter;
//     padding-right: @largeMonitorGutter;
//   }
// }
// @media only screen and (min-width: @widescreenMonitorBreakpoint) {
//   .ui.page.grid {
//     width: @widescreenMonitorWidth;
//     margin-left: @widescreenMargin;
//     margin-right: @widescreenMargin;
//     padding-left: @widescreenMonitorGutter;
//     padding-right: @widescreenMonitorGutter;
//   }
// }
// 
// 
// /*-------------------
//      Column Count
// --------------------*/
// 
// /* Assume full width with one column */
// .ui.grid > .column:only-child,
// .ui.grid > .row > .column:only-child {
//   width: @oneColumn;
// }
// 
// /* Grid Based */
// .ui[class*="one column"].grid > .row > .column,
// .ui[class*="one column"].grid > .column:not(.row) {
//   width: @oneColumn;
// }
// .ui[class*="two column"].grid > .row > .column,
// .ui[class*="two column"].grid > .column:not(.row) {
//   width: @twoColumn;
// }
// .ui[class*="three column"].grid > .row > .column,
// .ui[class*="three column"].grid > .column:not(.row) {
//   width: @threeColumn;
// }
// .ui[class*="four column"].grid > .row > .column,
// .ui[class*="four column"].grid > .column:not(.row) {
//   width: @fourColumn;
// }
// .ui[class*="five column"].grid > .row > .column,
// .ui[class*="five column"].grid > .column:not(.row) {
//   width: @fiveColumn;
// }
// .ui[class*="six column"].grid > .row > .column,
// .ui[class*="six column"].grid > .column:not(.row) {
//   width: @sixColumn;
// }
// .ui[class*="seven column"].grid > .row > .column,
// .ui[class*="seven column"].grid > .column:not(.row) {
//   width: @sevenColumn;
// }
// .ui[class*="eight column"].grid > .row > .column,
// .ui[class*="eight column"].grid > .column:not(.row) {
//   width: @eightColumn;
// }
// .ui[class*="nine column"].grid > .row > .column,
// .ui[class*="nine column"].grid > .column:not(.row) {
//   width: @nineColumn;
// }
// .ui[class*="ten column"].grid > .row > .column,
// .ui[class*="ten column"].grid > .column:not(.row) {
//   width: @tenColumn;
// }
// .ui[class*="eleven column"].grid > .row > .column,
// .ui[class*="eleven column"].grid > .column:not(.row) {
//   width: @elevenColumn;
// }
// .ui[class*="twelve column"].grid > .row > .column,
// .ui[class*="twelve column"].grid > .column:not(.row) {
//   width: @twelveColumn;
// }
// .ui[class*="thirteen column"].grid > .row > .column,
// .ui[class*="thirteen column"].grid > .column:not(.row) {
//   width: @thirteenColumn;
// }
// .ui[class*="fourteen column"].grid > .row > .column,
// .ui[class*="fourteen column"].grid > .column:not(.row) {
//   width: @fourteenColumn;
// }
// .ui[class*="fifteen column"].grid > .row > .column,
// .ui[class*="fifteen column"].grid > .column:not(.row) {
//   width: @fifteenColumn;
// }
// .ui[class*="sixteen column"].grid > .row > .column,
// .ui[class*="sixteen column"].grid > .column:not(.row) {
//   width: @sixteenColumn;
// }
// 
// /* Row Based Overrides */
// .ui.grid > [class*="one column"].row > .column {
//   width: @oneColumn !important;
// }
// .ui.grid > [class*="two column"].row > .column {
//   width: @twoColumn !important;
// }
// .ui.grid > [class*="three column"].row > .column {
//   width: @threeColumn !important;
// }
// .ui.grid > [class*="four column"].row > .column {
//   width: @fourColumn !important;
// }
// .ui.grid > [class*="five column"].row > .column {
//   width: @fiveColumn !important;
// }
// .ui.grid > [class*="six column"].row > .column {
//   width: @sixColumn !important;
// }
// .ui.grid > [class*="seven column"].row > .column {
//   width: @sevenColumn !important;
// }
// .ui.grid > [class*="eight column"].row > .column {
//   width: @eightColumn !important;
// }
// .ui.grid > [class*="nine column"].row > .column {
//   width: @nineColumn !important;
// }
// .ui.grid > [class*="ten column"].row > .column {
//   width: @tenColumn !important;
// }
// .ui.grid > [class*="eleven column"].row > .column {
//   width: @elevenColumn !important;
// }
// .ui.grid > [class*="twelve column"].row > .column {
//   width: @twelveColumn !important;
// }
// .ui.grid > [class*="thirteen column"].row > .column {
//   width: @thirteenColumn !important;
// }
// .ui.grid > [class*="fourteen column"].row > .column {
//   width: @fourteenColumn !important;
// }
// .ui.grid > [class*="fifteen column"].row > .column {
//   width: @fifteenColumn !important;
// }
// .ui.grid > [class*="sixteen column"].row > .column {
//   width: @sixteenColumn !important;
// }
// 
// /* Celled Page */
// .ui.celled.page.grid {
//   box-shadow: none;
// }
// 
// /*-------------------
//     Column Width
// --------------------*/
// 
// /* Sizing Combinations */
// .ui.grid > .row > [class*="one wide"].column,
// .ui.grid > .column.row > [class*="one wide"].column,
// .ui.grid > [class*="one wide"].column,
// .ui.column.grid > [class*="one wide"].column {
//   width: @oneWide !important;
// }
// .ui.grid > .row > [class*="two wide"].column,
// .ui.grid > .column.row > [class*="two wide"].column,
// .ui.grid > [class*="two wide"].column,
// .ui.column.grid > [class*="two wide"].column {
//   width: @twoWide !important;
// }
// .ui.grid > .row > [class*="three wide"].column,
// .ui.grid > .column.row > [class*="three wide"].column,
// .ui.grid > [class*="three wide"].column,
// .ui.column.grid > [class*="three wide"].column {
//   width: @threeWide !important;
// }
// .ui.grid > .row > [class*="four wide"].column,
// .ui.grid > .column.row > [class*="four wide"].column,
// .ui.grid > [class*="four wide"].column,
// .ui.column.grid > [class*="four wide"].column {
//   width: @fourWide !important;
// }
// .ui.grid > .row > [class*="five wide"].column,
// .ui.grid > .column.row > [class*="five wide"].column,
// .ui.grid > [class*="five wide"].column,
// .ui.column.grid > [class*="five wide"].column {
//   width: @fiveWide !important;
// }
// .ui.grid > .row > [class*="six wide"].column,
// .ui.grid > .column.row > [class*="six wide"].column,
// .ui.grid > [class*="six wide"].column,
// .ui.column.grid > [class*="six wide"].column {
//   width: @sixWide !important;
// }
// .ui.grid > .row > [class*="seven wide"].column,
// .ui.grid > .column.row > [class*="seven wide"].column,
// .ui.grid > [class*="seven wide"].column,
// .ui.column.grid > [class*="seven wide"].column {
//   width: @sevenWide !important;
// }
// .ui.grid > .row > [class*="eight wide"].column,
// .ui.grid > .column.row > [class*="eight wide"].column,
// .ui.grid > [class*="eight wide"].column,
// .ui.column.grid > [class*="eight wide"].column {
//   width: @eightWide !important;
// }
// .ui.grid > .row > [class*="nine wide"].column,
// .ui.grid > .column.row > [class*="nine wide"].column,
// .ui.grid > [class*="nine wide"].column,
// .ui.column.grid > [class*="nine wide"].column {
//   width: @nineWide !important;
// }
// .ui.grid > .row > [class*="ten wide"].column,
// .ui.grid > .column.row > [class*="ten wide"].column,
// .ui.grid > [class*="ten wide"].column,
// .ui.column.grid > [class*="ten wide"].column {
//   width: @tenWide !important;
// }
// .ui.grid > .row > [class*="eleven wide"].column,
// .ui.grid > .column.row > [class*="eleven wide"].column,
// .ui.grid > [class*="eleven wide"].column,
// .ui.column.grid > [class*="eleven wide"].column {
//   width: @elevenWide !important;
// }
// .ui.grid > .row > [class*="twelve wide"].column,
// .ui.grid > .column.row > [class*="twelve wide"].column,
// .ui.grid > [class*="twelve wide"].column,
// .ui.column.grid > [class*="twelve wide"].column {
//   width: @twelveWide !important;
// }
// .ui.grid > .row > [class*="thirteen wide"].column,
// .ui.grid > .column.row > [class*="thirteen wide"].column,
// .ui.grid > [class*="thirteen wide"].column,
// .ui.column.grid > [class*="thirteen wide"].column {
//   width: @thirteenWide !important;
// }
// .ui.grid > .row > [class*="fourteen wide"].column,
// .ui.grid > .column.row > [class*="fourteen wide"].column,
// .ui.grid > [class*="fourteen wide"].column,
// .ui.column.grid > [class*="fourteen wide"].column {
//   width: @fourteenWide !important;
// }
// .ui.grid > .row > [class*="fifteen wide"].column,
// .ui.grid > .column.row > [class*="fifteen wide"].column,
// .ui.grid > [class*="fifteen wide"].column,
// .ui.column.grid > [class*="fifteen wide"].column {
//   width: @fifteenWide !important;
// }
// .ui.grid > .row > [class*="sixteen wide"].column,
// .ui.grid > .column.row > [class*="sixteen wide"].column,
// .ui.grid > [class*="sixteen wide"].column,
// .ui.column.grid > [class*="sixteen wide"].column {
//   width: @sixteenWide !important;
// }
// 
// /*----------------------
//     Width per Device
// -----------------------*/
// 
// /* Mobile Sizing Combinations */
// @media only screen and (min-width: @mobileBreakpoint) and (max-width: @largestMobileScreen) {
//   .ui.grid > .row > [class*="one wide mobile"].column,
//   .ui.grid > .column.row > [class*="one wide mobile"].column,
//   .ui.grid > [class*="one wide mobile"].column,
//   .ui.column.grid > [class*="one wide mobile"].column {
//     width: @oneWide !important;
//   }
//   .ui.grid > .row > [class*="two wide mobile"].column,
//   .ui.grid > .column.row > [class*="two wide mobile"].column,
//   .ui.grid > [class*="two wide mobile"].column,
//   .ui.column.grid > [class*="two wide mobile"].column {
//     width: @twoWide !important;
//   }
//   .ui.grid > .row > [class*="three wide mobile"].column,
//   .ui.grid > .column.row > [class*="three wide mobile"].column,
//   .ui.grid > [class*="three wide mobile"].column,
//   .ui.column.grid > [class*="three wide mobile"].column {
//     width: @threeWide !important;
//   }
//   .ui.grid > .row > [class*="four wide mobile"].column,
//   .ui.grid > .column.row > [class*="four wide mobile"].column,
//   .ui.grid > [class*="four wide mobile"].column,
//   .ui.column.grid > [class*="four wide mobile"].column {
//     width: @fourWide !important;
//   }
//   .ui.grid > .row > [class*="five wide mobile"].column,
//   .ui.grid > .column.row > [class*="five wide mobile"].column,
//   .ui.grid > [class*="five wide mobile"].column,
//   .ui.column.grid > [class*="five wide mobile"].column {
//     width: @fiveWide !important;
//   }
//   .ui.grid > .row > [class*="six wide mobile"].column,
//   .ui.grid > .column.row > [class*="six wide mobile"].column,
//   .ui.grid > [class*="six wide mobile"].column,
//   .ui.column.grid > [class*="six wide mobile"].column {
//     width: @sixWide !important;
//   }
//   .ui.grid > .row > [class*="seven wide mobile"].column,
//   .ui.grid > .column.row > [class*="seven wide mobile"].column,
//   .ui.grid > [class*="seven wide mobile"].column,
//   .ui.column.grid > [class*="seven wide mobile"].column {
//     width: @sevenWide !important;
//   }
//   .ui.grid > .row > [class*="eight wide mobile"].column,
//   .ui.grid > .column.row > [class*="eight wide mobile"].column,
//   .ui.grid > [class*="eight wide mobile"].column,
//   .ui.column.grid > [class*="eight wide mobile"].column {
//     width: @eightWide !important;
//   }
//   .ui.grid > .row > [class*="nine wide mobile"].column,
//   .ui.grid > .column.row > [class*="nine wide mobile"].column,
//   .ui.grid > [class*="nine wide mobile"].column,
//   .ui.column.grid > [class*="nine wide mobile"].column {
//     width: @nineWide !important;
//   }
//   .ui.grid > .row > [class*="ten wide mobile"].column,
//   .ui.grid > .column.row > [class*="ten wide mobile"].column,
//   .ui.grid > [class*="ten wide mobile"].column,
//   .ui.column.grid > [class*="ten wide mobile"].column {
//     width: @tenWide !important;
//   }
//   .ui.grid > .row > [class*="eleven wide mobile"].column,
//   .ui.grid > .column.row > [class*="eleven wide mobile"].column,
//   .ui.grid > [class*="eleven wide mobile"].column,
//   .ui.column.grid > [class*="eleven wide mobile"].column {
//     width: @elevenWide !important;
//   }
//   .ui.grid > .row > [class*="twelve wide mobile"].column,
//   .ui.grid > .column.row > [class*="twelve wide mobile"].column,
//   .ui.grid > [class*="twelve wide mobile"].column,
//   .ui.column.grid > [class*="twelve wide mobile"].column {
//     width: @twelveWide !important;
//   }
//   .ui.grid > .row > [class*="thirteen wide mobile"].column,
//   .ui.grid > .column.row > [class*="thirteen wide mobile"].column,
//   .ui.grid > [class*="thirteen wide mobile"].column,
//   .ui.column.grid > [class*="thirteen wide mobile"].column {
//     width: @thirteenWide !important;
//   }
//   .ui.grid > .row > [class*="fourteen wide mobile"].column,
//   .ui.grid > .column.row > [class*="fourteen wide mobile"].column,
//   .ui.grid > [class*="fourteen wide mobile"].column,
//   .ui.column.grid > [class*="fourteen wide mobile"].column {
//     width: @fourteenWide !important;
//   }
//   .ui.grid > .row > [class*="fifteen wide mobile"].column,
//   .ui.grid > .column.row > [class*="fifteen wide mobile"].column,
//   .ui.grid > [class*="fifteen wide mobile"].column,
//   .ui.column.grid > [class*="fifteen wide mobile"].column {
//     width: @fifteenWide !important;
//   }
//   .ui.grid > .row > [class*="sixteen wide mobile"].column,
//   .ui.grid > .column.row > [class*="sixteen wide mobile"].column,
//   .ui.grid > [class*="sixteen wide mobile"].column,
//   .ui.column.grid > [class*="sixteen wide mobile"].column {
//     width: @sixteenWide !important;
//   }
// }
// 
// /* Tablet Sizing Combinations */
// @media only screen and (min-width: @tabletBreakpoint) and (max-width: @largestTabletScreen) {
//   .ui.grid > .row > [class*="one wide tablet"].column,
//   .ui.grid > .column.row > [class*="one wide tablet"].column,
//   .ui.grid > [class*="one wide tablet"].column,
//   .ui.column.grid > [class*="one wide tablet"].column {
//     width: @oneWide !important;
//   }
//   .ui.grid > .row > [class*="two wide tablet"].column,
//   .ui.grid > .column.row > [class*="two wide tablet"].column,
//   .ui.grid > [class*="two wide tablet"].column,
//   .ui.column.grid > [class*="two wide tablet"].column {
//     width: @twoWide !important;
//   }
//   .ui.grid > .row > [class*="three wide tablet"].column,
//   .ui.grid > .column.row > [class*="three wide tablet"].column,
//   .ui.grid > [class*="three wide tablet"].column,
//   .ui.column.grid > [class*="three wide tablet"].column {
//     width: @threeWide !important;
//   }
//   .ui.grid > .row > [class*="four wide tablet"].column,
//   .ui.grid > .column.row > [class*="four wide tablet"].column,
//   .ui.grid > [class*="four wide tablet"].column,
//   .ui.column.grid > [class*="four wide tablet"].column {
//     width: @fourWide !important;
//   }
//   .ui.grid > .row > [class*="five wide tablet"].column,
//   .ui.grid > .column.row > [class*="five wide tablet"].column,
//   .ui.grid > [class*="five wide tablet"].column,
//   .ui.column.grid > [class*="five wide tablet"].column {
//     width: @fiveWide !important;
//   }
//   .ui.grid > .row > [class*="six wide tablet"].column,
//   .ui.grid > .column.row > [class*="six wide tablet"].column,
//   .ui.grid > [class*="six wide tablet"].column,
//   .ui.column.grid > [class*="six wide tablet"].column {
//     width: @sixWide !important;
//   }
//   .ui.grid > .row > [class*="seven wide tablet"].column,
//   .ui.grid > .column.row > [class*="seven wide tablet"].column,
//   .ui.grid > [class*="seven wide tablet"].column,
//   .ui.column.grid > [class*="seven wide tablet"].column {
//     width: @sevenWide !important;
//   }
//   .ui.grid > .row > [class*="eight wide tablet"].column,
//   .ui.grid > .column.row > [class*="eight wide tablet"].column,
//   .ui.grid > [class*="eight wide tablet"].column,
//   .ui.column.grid > [class*="eight wide tablet"].column {
//     width: @eightWide !important;
//   }
//   .ui.grid > .row > [class*="nine wide tablet"].column,
//   .ui.grid > .column.row > [class*="nine wide tablet"].column,
//   .ui.grid > [class*="nine wide tablet"].column,
//   .ui.column.grid > [class*="nine wide tablet"].column {
//     width: @nineWide !important;
//   }
//   .ui.grid > .row > [class*="ten wide tablet"].column,
//   .ui.grid > .column.row > [class*="ten wide tablet"].column,
//   .ui.grid > [class*="ten wide tablet"].column,
//   .ui.column.grid > [class*="ten wide tablet"].column {
//     width: @tenWide !important;
//   }
//   .ui.grid > .row > [class*="eleven wide tablet"].column,
//   .ui.grid > .column.row > [class*="eleven wide tablet"].column,
//   .ui.grid > [class*="eleven wide tablet"].column,
//   .ui.column.grid > [class*="eleven wide tablet"].column {
//     width: @elevenWide !important;
//   }
//   .ui.grid > .row > [class*="twelve wide tablet"].column,
//   .ui.grid > .column.row > [class*="twelve wide tablet"].column,
//   .ui.grid > [class*="twelve wide tablet"].column,
//   .ui.column.grid > [class*="twelve wide tablet"].column {
//     width: @twelveWide !important;
//   }
//   .ui.grid > .row > [class*="thirteen wide tablet"].column,
//   .ui.grid > .column.row > [class*="thirteen wide tablet"].column,
//   .ui.grid > [class*="thirteen wide tablet"].column,
//   .ui.column.grid > [class*="thirteen wide tablet"].column {
//     width: @thirteenWide !important;
//   }
//   .ui.grid > .row > [class*="fourteen wide tablet"].column,
//   .ui.grid > .column.row > [class*="fourteen wide tablet"].column,
//   .ui.grid > [class*="fourteen wide tablet"].column,
//   .ui.column.grid > [class*="fourteen wide tablet"].column {
//     width: @fourteenWide !important;
//   }
//   .ui.grid > .row > [class*="fifteen wide tablet"].column,
//   .ui.grid > .column.row > [class*="fifteen wide tablet"].column,
//   .ui.grid > [class*="fifteen wide tablet"].column,
//   .ui.column.grid > [class*="fifteen wide tablet"].column {
//     width: @fifteenWide !important;
//   }
//   .ui.grid > .row > [class*="sixteen wide tablet"].column,
//   .ui.grid > .column.row > [class*="sixteen wide tablet"].column,
//   .ui.grid > [class*="sixteen wide tablet"].column,
//   .ui.column.grid > [class*="sixteen wide tablet"].column {
//     width: @sixteenWide !important;
//   }
// }
// 
// /* Computer/Desktop Sizing Combinations */
// @media only screen and (min-width: @computerBreakpoint) {
//     .ui.grid > .row > [class*="one wide computer"].column,
//   .ui.grid > .column.row > [class*="one wide computer"].column,
//   .ui.grid > [class*="one wide computer"].column,
//   .ui.column.grid > [class*="one wide computer"].column {
//     width: @oneWide !important;
//   }
//   .ui.grid > .row > [class*="two wide computer"].column,
//   .ui.grid > .column.row > [class*="two wide computer"].column,
//   .ui.grid > [class*="two wide computer"].column,
//   .ui.column.grid > [class*="two wide computer"].column {
//     width: @twoWide !important;
//   }
//   .ui.grid > .row > [class*="three wide computer"].column,
//   .ui.grid > .column.row > [class*="three wide computer"].column,
//   .ui.grid > [class*="three wide computer"].column,
//   .ui.column.grid > [class*="three wide computer"].column {
//     width: @threeWide !important;
//   }
//   .ui.grid > .row > [class*="four wide computer"].column,
//   .ui.grid > .column.row > [class*="four wide computer"].column,
//   .ui.grid > [class*="four wide computer"].column,
//   .ui.column.grid > [class*="four wide computer"].column {
//     width: @fourWide !important;
//   }
//   .ui.grid > .row > [class*="five wide computer"].column,
//   .ui.grid > .column.row > [class*="five wide computer"].column,
//   .ui.grid > [class*="five wide computer"].column,
//   .ui.column.grid > [class*="five wide computer"].column {
//     width: @fiveWide !important;
//   }
//   .ui.grid > .row > [class*="six wide computer"].column,
//   .ui.grid > .column.row > [class*="six wide computer"].column,
//   .ui.grid > [class*="six wide computer"].column,
//   .ui.column.grid > [class*="six wide computer"].column {
//     width: @sixWide !important;
//   }
//   .ui.grid > .row > [class*="seven wide computer"].column,
//   .ui.grid > .column.row > [class*="seven wide computer"].column,
//   .ui.grid > [class*="seven wide computer"].column,
//   .ui.column.grid > [class*="seven wide computer"].column {
//     width: @sevenWide !important;
//   }
//   .ui.grid > .row > [class*="eight wide computer"].column,
//   .ui.grid > .column.row > [class*="eight wide computer"].column,
//   .ui.grid > [class*="eight wide computer"].column,
//   .ui.column.grid > [class*="eight wide computer"].column {
//     width: @eightWide !important;
//   }
//   .ui.grid > .row > [class*="nine wide computer"].column,
//   .ui.grid > .column.row > [class*="nine wide computer"].column,
//   .ui.grid > [class*="nine wide computer"].column,
//   .ui.column.grid > [class*="nine wide computer"].column {
//     width: @nineWide !important;
//   }
//   .ui.grid > .row > [class*="ten wide computer"].column,
//   .ui.grid > .column.row > [class*="ten wide computer"].column,
//   .ui.grid > [class*="ten wide computer"].column,
//   .ui.column.grid > [class*="ten wide computer"].column {
//     width: @tenWide !important;
//   }
//   .ui.grid > .row > [class*="eleven wide computer"].column,
//   .ui.grid > .column.row > [class*="eleven wide computer"].column,
//   .ui.grid > [class*="eleven wide computer"].column,
//   .ui.column.grid > [class*="eleven wide computer"].column {
//     width: @elevenWide !important;
//   }
//   .ui.grid > .row > [class*="twelve wide computer"].column,
//   .ui.grid > .column.row > [class*="twelve wide computer"].column,
//   .ui.grid > [class*="twelve wide computer"].column,
//   .ui.column.grid > [class*="twelve wide computer"].column {
//     width: @twelveWide !important;
//   }
//   .ui.grid > .row > [class*="thirteen wide computer"].column,
//   .ui.grid > .column.row > [class*="thirteen wide computer"].column,
//   .ui.grid > [class*="thirteen wide computer"].column,
//   .ui.column.grid > [class*="thirteen wide computer"].column {
//     width: @thirteenWide !important;
//   }
//   .ui.grid > .row > [class*="fourteen wide computer"].column,
//   .ui.grid > .column.row > [class*="fourteen wide computer"].column,
//   .ui.grid > [class*="fourteen wide computer"].column,
//   .ui.column.grid > [class*="fourteen wide computer"].column {
//     width: @fourteenWide !important;
//   }
//   .ui.grid > .row > [class*="fifteen wide computer"].column,
//   .ui.grid > .column.row > [class*="fifteen wide computer"].column,
//   .ui.grid > [class*="fifteen wide computer"].column,
//   .ui.column.grid > [class*="fifteen wide computer"].column {
//     width: @fifteenWide !important;
//   }
//   .ui.grid > .row > [class*="sixteen wide computer"].column,
//   .ui.grid > .column.row > [class*="sixteen wide computer"].column,
//   .ui.grid > [class*="sixteen wide computer"].column,
//   .ui.column.grid > [class*="sixteen wide computer"].column {
//     width: @sixteenWide !important;
//   }
// }
// 
// /* Large Monitor Sizing Combinations */
// @media only screen and (min-width: @largeMonitorBreakpoint) and (max-width: @largestLargeMonitor){
//   .ui.grid > .row > [class*="one wide large screen"].column,
//   .ui.grid > .column.row > [class*="one wide large screen"].column,
//   .ui.grid > [class*="one wide large screen"].column,
//   .ui.column.grid > [class*="one wide large screen"].column {
//     width: @oneWide !important;
//   }
//   .ui.grid > .row > [class*="two wide large screen"].column,
//   .ui.grid > .column.row > [class*="two wide large screen"].column,
//   .ui.grid > [class*="two wide large screen"].column,
//   .ui.column.grid > [class*="two wide large screen"].column {
//     width: @twoWide !important;
//   }
//   .ui.grid > .row > [class*="three wide large screen"].column,
//   .ui.grid > .column.row > [class*="three wide large screen"].column,
//   .ui.grid > [class*="three wide large screen"].column,
//   .ui.column.grid > [class*="three wide large screen"].column {
//     width: @threeWide !important;
//   }
//   .ui.grid > .row > [class*="four wide large screen"].column,
//   .ui.grid > .column.row > [class*="four wide large screen"].column,
//   .ui.grid > [class*="four wide large screen"].column,
//   .ui.column.grid > [class*="four wide large screen"].column {
//     width: @fourWide !important;
//   }
//   .ui.grid > .row > [class*="five wide large screen"].column,
//   .ui.grid > .column.row > [class*="five wide large screen"].column,
//   .ui.grid > [class*="five wide large screen"].column,
//   .ui.column.grid > [class*="five wide large screen"].column {
//     width: @fiveWide !important;
//   }
//   .ui.grid > .row > [class*="six wide large screen"].column,
//   .ui.grid > .column.row > [class*="six wide large screen"].column,
//   .ui.grid > [class*="six wide large screen"].column,
//   .ui.column.grid > [class*="six wide large screen"].column {
//     width: @sixWide !important;
//   }
//   .ui.grid > .row > [class*="seven wide large screen"].column,
//   .ui.grid > .column.row > [class*="seven wide large screen"].column,
//   .ui.grid > [class*="seven wide large screen"].column,
//   .ui.column.grid > [class*="seven wide large screen"].column {
//     width: @sevenWide !important;
//   }
//   .ui.grid > .row > [class*="eight wide large screen"].column,
//   .ui.grid > .column.row > [class*="eight wide large screen"].column,
//   .ui.grid > [class*="eight wide large screen"].column,
//   .ui.column.grid > [class*="eight wide large screen"].column {
//     width: @eightWide !important;
//   }
//   .ui.grid > .row > [class*="nine wide large screen"].column,
//   .ui.grid > .column.row > [class*="nine wide large screen"].column,
//   .ui.grid > [class*="nine wide large screen"].column,
//   .ui.column.grid > [class*="nine wide large screen"].column {
//     width: @nineWide !important;
//   }
//   .ui.grid > .row > [class*="ten wide large screen"].column,
//   .ui.grid > .column.row > [class*="ten wide large screen"].column,
//   .ui.grid > [class*="ten wide large screen"].column,
//   .ui.column.grid > [class*="ten wide large screen"].column {
//     width: @tenWide !important;
//   }
//   .ui.grid > .row > [class*="eleven wide large screen"].column,
//   .ui.grid > .column.row > [class*="eleven wide large screen"].column,
//   .ui.grid > [class*="eleven wide large screen"].column,
//   .ui.column.grid > [class*="eleven wide large screen"].column {
//     width: @elevenWide !important;
//   }
//   .ui.grid > .row > [class*="twelve wide large screen"].column,
//   .ui.grid > .column.row > [class*="twelve wide large screen"].column,
//   .ui.grid > [class*="twelve wide large screen"].column,
//   .ui.column.grid > [class*="twelve wide large screen"].column {
//     width: @twelveWide !important;
//   }
//   .ui.grid > .row > [class*="thirteen wide large screen"].column,
//   .ui.grid > .column.row > [class*="thirteen wide large screen"].column,
//   .ui.grid > [class*="thirteen wide large screen"].column,
//   .ui.column.grid > [class*="thirteen wide large screen"].column {
//     width: @thirteenWide !important;
//   }
//   .ui.grid > .row > [class*="fourteen wide large screen"].column,
//   .ui.grid > .column.row > [class*="fourteen wide large screen"].column,
//   .ui.grid > [class*="fourteen wide large screen"].column,
//   .ui.column.grid > [class*="fourteen wide large screen"].column {
//     width: @fourteenWide !important;
//   }
//   .ui.grid > .row > [class*="fifteen wide large screen"].column,
//   .ui.grid > .column.row > [class*="fifteen wide large screen"].column,
//   .ui.grid > [class*="fifteen wide large screen"].column,
//   .ui.column.grid > [class*="fifteen wide large screen"].column {
//     width: @fifteenWide !important;
//   }
//   .ui.grid > .row > [class*="sixteen wide large screen"].column,
//   .ui.grid > .column.row > [class*="sixteen wide large screen"].column,
//   .ui.grid > [class*="sixteen wide large screen"].column,
//   .ui.column.grid > [class*="sixteen wide large screen"].column {
//     width: @sixteenWide !important;
//   }
// }
// 
// /* Widescreen Sizing Combinations */
// @media only screen and (min-width: @widescreenMonitorBreakpoint) {
//   .ui.grid > .row > [class*="one wide widescreen"].column,
//   .ui.grid > .column.row > [class*="one wide widescreen"].column,
//   .ui.grid > [class*="one wide widescreen"].column,
//   .ui.column.grid > [class*="one wide widescreen"].column {
//     width: @oneWide !important;
//   }
//   .ui.grid > .row > [class*="two wide widescreen"].column,
//   .ui.grid > .column.row > [class*="two wide widescreen"].column,
//   .ui.grid > [class*="two wide widescreen"].column,
//   .ui.column.grid > [class*="two wide widescreen"].column {
//     width: @twoWide !important;
//   }
//   .ui.grid > .row > [class*="three wide widescreen"].column,
//   .ui.grid > .column.row > [class*="three wide widescreen"].column,
//   .ui.grid > [class*="three wide widescreen"].column,
//   .ui.column.grid > [class*="three wide widescreen"].column {
//     width: @threeWide !important;
//   }
//   .ui.grid > .row > [class*="four wide widescreen"].column,
//   .ui.grid > .column.row > [class*="four wide widescreen"].column,
//   .ui.grid > [class*="four wide widescreen"].column,
//   .ui.column.grid > [class*="four wide widescreen"].column {
//     width: @fourWide !important;
//   }
//   .ui.grid > .row > [class*="five wide widescreen"].column,
//   .ui.grid > .column.row > [class*="five wide widescreen"].column,
//   .ui.grid > [class*="five wide widescreen"].column,
//   .ui.column.grid > [class*="five wide widescreen"].column {
//     width: @fiveWide !important;
//   }
//   .ui.grid > .row > [class*="six wide widescreen"].column,
//   .ui.grid > .column.row > [class*="six wide widescreen"].column,
//   .ui.grid > [class*="six wide widescreen"].column,
//   .ui.column.grid > [class*="six wide widescreen"].column {
//     width: @sixWide !important;
//   }
//   .ui.grid > .row > [class*="seven wide widescreen"].column,
//   .ui.grid > .column.row > [class*="seven wide widescreen"].column,
//   .ui.grid > [class*="seven wide widescreen"].column,
//   .ui.column.grid > [class*="seven wide widescreen"].column {
//     width: @sevenWide !important;
//   }
//   .ui.grid > .row > [class*="eight wide widescreen"].column,
//   .ui.grid > .column.row > [class*="eight wide widescreen"].column,
//   .ui.grid > [class*="eight wide widescreen"].column,
//   .ui.column.grid > [class*="eight wide widescreen"].column {
//     width: @eightWide !important;
//   }
//   .ui.grid > .row > [class*="nine wide widescreen"].column,
//   .ui.grid > .column.row > [class*="nine wide widescreen"].column,
//   .ui.grid > [class*="nine wide widescreen"].column,
//   .ui.column.grid > [class*="nine wide widescreen"].column {
//     width: @nineWide !important;
//   }
//   .ui.grid > .row > [class*="ten wide widescreen"].column,
//   .ui.grid > .column.row > [class*="ten wide widescreen"].column,
//   .ui.grid > [class*="ten wide widescreen"].column,
//   .ui.column.grid > [class*="ten wide widescreen"].column {
//     width: @tenWide !important;
//   }
//   .ui.grid > .row > [class*="eleven wide widescreen"].column,
//   .ui.grid > .column.row > [class*="eleven wide widescreen"].column,
//   .ui.grid > [class*="eleven wide widescreen"].column,
//   .ui.column.grid > [class*="eleven wide widescreen"].column {
//     width: @elevenWide !important;
//   }
//   .ui.grid > .row > [class*="twelve wide widescreen"].column,
//   .ui.grid > .column.row > [class*="twelve wide widescreen"].column,
//   .ui.grid > [class*="twelve wide widescreen"].column,
//   .ui.column.grid > [class*="twelve wide widescreen"].column {
//     width: @twelveWide !important;
//   }
//   .ui.grid > .row > [class*="thirteen wide widescreen"].column,
//   .ui.grid > .column.row > [class*="thirteen wide widescreen"].column,
//   .ui.grid > [class*="thirteen wide widescreen"].column,
//   .ui.column.grid > [class*="thirteen wide widescreen"].column {
//     width: @thirteenWide !important;
//   }
//   .ui.grid > .row > [class*="fourteen wide widescreen"].column,
//   .ui.grid > .column.row > [class*="fourteen wide widescreen"].column,
//   .ui.grid > [class*="fourteen wide widescreen"].column,
//   .ui.column.grid > [class*="fourteen wide widescreen"].column {
//     width: @fourteenWide !important;
//   }
//   .ui.grid > .row > [class*="fifteen wide widescreen"].column,
//   .ui.grid > .column.row > [class*="fifteen wide widescreen"].column,
//   .ui.grid > [class*="fifteen wide widescreen"].column,
//   .ui.column.grid > [class*="fifteen wide widescreen"].column {
//     width: @fifteenWide !important;
//   }
//   .ui.grid > .row > [class*="sixteen wide widescreen"].column,
//   .ui.grid > .column.row > [class*="sixteen wide widescreen"].column,
//   .ui.grid > [class*="sixteen wide widescreen"].column,
//   .ui.column.grid > [class*="sixteen wide widescreen"].column {
//     width: @sixteenWide !important;
//   }
// }
// 
// /*----------------------
//         Centered
// -----------------------*/
// 
// .ui.centered.grid,
// .ui.centered.grid > .row,
// .ui.grid > .centered.row {
//   text-align: center;
//   justify-content: center;
// }
// .ui.centered.grid > .column:not(.aligned):not(.justified):not(.row),
// .ui.centered.grid > .row > .column:not(.aligned):not(.justified),
// .ui.grid .centered.row > .column:not(.aligned):not(.justified) {
//   text-align: left;
// }
// 
// .ui.grid > .centered.column,
// .ui.grid > .row > .centered.column {
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
// }
// 
// /*----------------------
//         Relaxed
// -----------------------*/
// 
// .ui.relaxed.grid > .column:not(.row),
// .ui.relaxed.grid > .row > .column,
// .ui.grid > .relaxed.row > .column {
//   padding-left: (@relaxedGutterWidth / 2);
//   padding-right: (@relaxedGutterWidth / 2);
// }
// 
// .ui[class*="very relaxed"].grid > .column:not(.row),
// .ui[class*="very relaxed"].grid > .row > .column,
// .ui.grid > [class*="very relaxed"].row > .column {
//   padding-left: (@veryRelaxedGutterWidth / 2);
//   padding-right: (@veryRelaxedGutterWidth / 2);
// }
// 
// /* Coupling with UI Divider */
// .ui.relaxed.grid .row + .ui.divider,
// .ui.grid .relaxed.row + .ui.divider {
//   margin-left: (@relaxedGutterWidth / 2);
//   margin-right: (@relaxedGutterWidth / 2);
// }
// .ui[class*="very relaxed"].grid .row + .ui.divider,
// .ui.grid [class*="very relaxed"].row + .ui.divider {
//   margin-left: (@veryRelaxedGutterWidth / 2);
//   margin-right: (@veryRelaxedGutterWidth / 2);
// }
// 
// 
// /*----------------------
//         Padded
// -----------------------*/
// 
// .ui.padded.grid:not(.vertically):not(.horizontally) {
//   margin: 0em !important;
// }
// [class*="horizontally padded"].ui.grid {
//   margin-left: 0em !important;
//   margin-right: 0em !important;
// }
// [class*="vertically padded"].ui.grid {
//   margin-top: 0em !important;
//   margin-bottom: 0em !important;
// }
// 
// /*----------------------
//        "Floated"
// -----------------------*/
// 
// .ui.grid [class*="left floated"].column {
//   margin-right: auto;
// }
// .ui.grid [class*="right floated"].column {
//   margin-left: auto;
// }
// 
// 
// /*----------------------
//         Divided
// -----------------------*/
// 
// .ui.divided.grid:not([class*="vertically divided"]) > .column:not(.row),
// .ui.divided.grid:not([class*="vertically divided"]) > .row > .column {
//   box-shadow: @dividedBorder;
// }
// 
// /* Swap from padding to margin on columns to have dividers align */
// .ui[class*="vertically divided"].grid > .column:not(.row),
// .ui[class*="vertically divided"].grid > .row > .column {
//   margin-top: (@rowSpacing / 2);
//   margin-bottom: (@rowSpacing / 2);
//   padding-top: 0rem;
//   padding-bottom: 0rem;
// }
// .ui[class*="vertically divided"].grid > .row {
//   margin-top: 0em;
//   margin-bottom: 0em;
// }
// 
// 
// 
// /* No divider on first column on row */
// .ui.divided.grid:not([class*="vertically divided"]) > .column:first-child,
// .ui.divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
//   box-shadow: none;
// }
// 
// /* No space on top of first row */
// .ui[class*="vertically divided"].grid > .row:first-child > .column {
//   margin-top: 0em;
// }
// 
// 
// /* Divided Row */
// .ui.grid > .divided.row > .column {
//   box-shadow: @dividedBorder;
// }
// .ui.grid > .divided.row > .column:first-child {
//   box-shadow: none;
// }
// 
// /* Vertically Divided */
// .ui[class*="vertically divided"].grid > .row {
//   position: relative;
// }
// .ui[class*="vertically divided"].grid > .row:before {
//   position: absolute;
//   content: "";
//   top: 0em;
//   left: 0px;
// 
//   width: ~"calc(100% - "@gutterWidth~")";
//   height: 1px;
// 
//   margin: 0% (@gutterWidth / 2);
//   box-shadow: @verticallyDividedBorder;
// }
// 
// /* Padded Horizontally Divided */
// [class*="horizontally padded"].ui.divided.grid,
// .ui.padded.divided.grid:not(.vertically):not(.horizontally) {
//   width: 100%;
// }
// 
// /* First Row Vertically Divided */
// .ui[class*="vertically divided"].grid > .row:first-child:before {
//   box-shadow: none;
// }
// 
// /* Inverted Divided */
// .ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row),
// .ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column {
//   box-shadow: @dividedInvertedBorder;
// }
// .ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row):first-child,
// .ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
//   box-shadow: none;
// }
// .ui.inverted[class*="vertically divided"].grid > .row:before {
//   box-shadow: @verticallyDividedInvertedBorder;
// }
// 
// /* Relaxed */
// .ui.relaxed[class*="vertically divided"].grid > .row:before {
//   margin-left: (@relaxedGutterWidth / 2);
//   margin-right: (@relaxedGutterWidth / 2);
//   width: ~"calc(100% - "@relaxedGutterWidth~")";
// }
// .ui[class*="very relaxed"][class*="vertically divided"].grid > .row:before {
//   margin-left: @veryRelaxedGutterWidth;
//   margin-right: @veryRelaxedGutterWidth;
//   width: ~"calc(100% - "@veryRelaxedGutterWidth~")";
// }
// 
// /*----------------------
//          Celled
// -----------------------*/
// 
// .ui.celled.grid {
//   width: 100%;
//   margin: @celledMargin;
//   box-shadow: @celledGridDivider;
// }
// 
// .ui.celled.grid > .row {
//   width: 100% !important;
//   margin: 0em;
//   padding: 0em;
//   box-shadow: @celledRowDivider;
// }
// .ui.celled.grid > .column:not(.row),
// .ui.celled.grid > .row > .column {
//   box-shadow: @celledColumnDivider;
// }
// 
// .ui.celled.grid > .column:first-child,
// .ui.celled.grid > .row > .column:first-child {
//   box-shadow: none;
// }
// 
// .ui.celled.grid > .column:not(.row),
// .ui.celled.grid > .row > .column {
//   padding: @celledPadding;
// }
// .ui.relaxed.celled.grid > .column:not(.row),
// .ui.relaxed.celled.grid > .row > .column {
//   padding: @celledRelaxedPadding;
// }
// .ui[class*="very relaxed"].celled.grid > .column:not(.row),
// .ui[class*="very relaxed"].celled.grid > .row > .column {
//   padding: @celledVeryRelaxedPadding;
// }
// 
// /* Internally Celled */
// .ui[class*="internally celled"].grid {
//   box-shadow: none;
//   margin: 0em;
// }
// .ui[class*="internally celled"].grid > .row:first-child {
//   box-shadow: none;
// }
// .ui[class*="internally celled"].grid > .row > .column:first-child {
//   box-shadow: none;
// }
// 
// /*----------------------
//    Vertically Aligned
// -----------------------*/
// 
// /* Top Aligned */
// .ui[class*="top aligned"].grid > .column:not(.row),
// .ui[class*="top aligned"].grid > .row > .column,
// .ui.grid > [class*="top aligned"].row > .column,
// .ui.grid > [class*="top aligned"].column:not(.row),
// .ui.grid > .row > [class*="top aligned"].column {
//   flex-direction: column;
//   vertical-align: top;
//   align-self: flex-start !important;
// }
// 
// /* Middle Aligned */
// .ui[class*="middle aligned"].grid > .column:not(.row),
// .ui[class*="middle aligned"].grid > .row > .column,
// .ui.grid > [class*="middle aligned"].row > .column,
// .ui.grid > [class*="middle aligned"].column:not(.row),
// .ui.grid > .row > [class*="middle aligned"].column {
//   flex-direction: column;
//   vertical-align: middle;
//   align-self: center !important;
// }
// 
// /* Bottom Aligned */
// .ui[class*="bottom aligned"].grid > .column:not(.row),
// .ui[class*="bottom aligned"].grid > .row > .column,
// .ui.grid > [class*="bottom aligned"].row > .column,
// .ui.grid > [class*="bottom aligned"].column:not(.row),
// .ui.grid > .row > [class*="bottom aligned"].column {
//   flex-direction: column;
//   vertical-align: bottom;
//   align-self: flex-end !important;
// }
// 
// /* Stretched */
// .ui.stretched.grid > .row > .column,
// .ui.stretched.grid > .column,
// .ui.grid > .stretched.row > .column,
// .ui.grid > .stretched.column:not(.row),
// .ui.grid > .row > .stretched.column {
//   display: inline-flex !important;
//   align-self: stretch;
//   flex-direction: column;
// }
// 
// .ui.stretched.grid > .row > .column > *,
// .ui.stretched.grid > .column > *,
// .ui.grid > .stretched.row > .column > *,
// .ui.grid > .stretched.column:not(.row) > *,
// .ui.grid > .row > .stretched.column > * {
//   flex-grow: 1;
// }
// 
// /*----------------------
//   Horizontally Centered
// -----------------------*/
// 
// /* Left Aligned */
// .ui[class*="left aligned"].grid > .column,
// .ui[class*="left aligned"].grid > .row > .column,
// .ui.grid > [class*="left aligned"].row > .column,
// .ui.grid > [class*="left aligned"].column.column,
// .ui.grid > .row > [class*="left aligned"].column.column {
//   text-align: left;
//   align-self: inherit;
// }
// 
// /* Center Aligned */
// .ui[class*="center aligned"].grid > .column,
// .ui[class*="center aligned"].grid > .row > .column,
// .ui.grid > [class*="center aligned"].row > .column,
// .ui.grid > [class*="center aligned"].column.column,
// .ui.grid > .row > [class*="center aligned"].column.column {
//   text-align: center;
//   align-self: inherit;
// }
// .ui[class*="center aligned"].grid {
//   justify-content: center;
// }
// 
// /* Right Aligned */
// .ui[class*="right aligned"].grid > .column,
// .ui[class*="right aligned"].grid > .row > .column,
// .ui.grid > [class*="right aligned"].row > .column,
// .ui.grid > [class*="right aligned"].column.column,
// .ui.grid > .row > [class*="right aligned"].column.column {
//   text-align: right;
//   align-self: inherit;
// }
// 
// /* Justified */
// .ui.justified.grid > .column,
// .ui.justified.grid > .row > .column,
// .ui.grid > .justified.row > .column,
// .ui.grid > .justified.column.column,
// .ui.grid > .row > .justified.column.column {
//   text-align: justify;
//   hyphens: auto;
// }
// 
// /*----------------------
//          Colored
// -----------------------*/
// 
// .ui.grid > .row > .red.column,
// .ui.grid > .row > .orange.column,
// .ui.grid > .row > .yellow.column,
// .ui.grid > .row > .olive.column,
// .ui.grid > .row > .green.column,
// .ui.grid > .row > .teal.column,
// .ui.grid > .row > .blue.column,
// .ui.grid > .row > .violet.column,
// .ui.grid > .row > .purple.column,
// .ui.grid > .row > .pink.column,
// .ui.grid > .row > .brown.column,
// .ui.grid > .row > .grey.column,
// .ui.grid > .row > .black.column {
//   margin-top: -(@rowSpacing / 2);
//   margin-bottom: -(@rowSpacing / 2);
//   padding-top: (@rowSpacing / 2);
//   padding-bottom: (@rowSpacing / 2);
// }
// 
// /* Red */
// .ui.grid > .red.row,
// .ui.grid > .red.column,
// .ui.grid > .row > .red.column {
//   background-color: @red !important;
//   color: @white;
// }
// /* Orange */
// .ui.grid > .orange.row,
// .ui.grid > .orange.column,
// .ui.grid > .row > .orange.column {
//   background-color: @orange !important;
//   color: @white;
// }
// /* Yellow */
// .ui.grid > .yellow.row,
// .ui.grid > .yellow.column,
// .ui.grid > .row > .yellow.column {
//   background-color: @yellow !important;
//   color: @white;
// }
// /* Olive */
// .ui.grid > .olive.row,
// .ui.grid > .olive.column,
// .ui.grid > .row > .olive.column {
//   background-color: @olive !important;
//   color: @white;
// }
// /* Green */
// .ui.grid > .green.row,
// .ui.grid > .green.column,
// .ui.grid > .row > .green.column {
//   background-color: @green !important;
//   color: @white;
// }
// /* Teal */
// .ui.grid > .teal.row,
// .ui.grid > .teal.column,
// .ui.grid > .row > .teal.column {
//   background-color: @teal !important;
//   color: @white;
// }
// /* Blue */
// .ui.grid > .blue.row,
// .ui.grid > .blue.column,
// .ui.grid > .row > .blue.column {
//   background-color: @blue !important;
//   color: @white;
// }
// /* Violet */
// .ui.grid > .violet.row,
// .ui.grid > .violet.column,
// .ui.grid > .row > .violet.column {
//   background-color: @violet !important;
//   color: @white;
// }
// /* Purple */
// .ui.grid > .purple.row,
// .ui.grid > .purple.column,
// .ui.grid > .row > .purple.column {
//   background-color: @purple !important;
//   color: @white;
// }
// /* Pink */
// .ui.grid > .pink.row,
// .ui.grid > .pink.column,
// .ui.grid > .row > .pink.column {
//   background-color: @pink !important;
//   color: @white;
// }
// /* Brown */
// .ui.grid > .brown.row,
// .ui.grid > .brown.column,
// .ui.grid > .row > .brown.column {
//   background-color: @brown !important;
//   color: @white;
// }
// /* Grey */
// .ui.grid > .grey.row,
// .ui.grid > .grey.column,
// .ui.grid > .row > .grey.column {
//   background-color: @grey !important;
//   color: @white;
// }
// /* Black */
// .ui.grid > .black.row,
// .ui.grid > .black.column,
// .ui.grid > .row > .black.column {
//   background-color: @black !important;
//   color: @white;
// }
// 
// 
// /*----------------------
//       Equal Width
// -----------------------*/
// 
// .ui[class*="equal width"].grid > .column:not(.row),
// .ui[class*="equal width"].grid > .row > .column,
// .ui.grid > [class*="equal width"].row > .column {
//   display: inline-block;
//   flex-grow: 1;
// }
// .ui[class*="equal width"].grid > .wide.column,
// .ui[class*="equal width"].grid > .row > .wide.column,
// .ui.grid > [class*="equal width"].row > .wide.column {
//   flex-grow: 0;
// }
// 
// 
// /*----------------------
//         Reverse
// -----------------------*/
// 
// 
// /* Mobile */
// @media only screen and (max-width: @largestMobileScreen) {
//   .ui[class*="mobile reversed"].grid,
//   .ui[class*="mobile reversed"].grid > .row,
//   .ui.grid > [class*="mobile reversed"].row {
//     flex-direction: row-reverse;
//   }
//   .ui[class*="mobile vertically reversed"].grid,
//   .ui.stackable[class*="mobile reversed"] {
//     flex-direction: column-reverse;
//   }
// 
//   /* Divided Reversed */
//   .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
//   .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
//     box-shadow: @dividedBorder;
//   }
//   .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
//   .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
//     box-shadow: none;
//   }
//   /* Vertically Divided Reversed */
//   .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"] > .row:first-child:before {
//     box-shadow: @verticallyDividedBorder;
//   }
//   .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"] > .row:last-child:before {
//     box-shadow: none;
//   }
//   /* Celled Reversed */
//   .ui[class*="mobile reversed"].celled.grid > .row > .column:first-child {
//     box-shadow: @celledColumnDivider;
//   }
//   .ui[class*="mobile reversed"].celled.grid > .row > .column:last-child {
//     box-shadow: none;
//   }
// }
// 
// /* Tablet */
// @media only screen and (min-width: @tabletBreakpoint) and (max-width: @largestTabletScreen) {
//   .ui[class*="tablet reversed"].grid,
//   .ui[class*="tablet reversed"].grid > .row,
//   .ui.grid > [class*="tablet reversed"].row {
//     flex-direction: row-reverse;
//   }
//   .ui[class*="tablet vertically reversed"].grid {
//     flex-direction: column-reverse;
//   }
// 
//   /* Divided Reversed */
//   .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
//   .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
//     box-shadow: @dividedBorder;
//   }
//   .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
//   .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
//     box-shadow: none;
//   }
//   /* Vertically Divided Reversed */
//   .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"] > .row:first-child:before {
//     box-shadow: @verticallyDividedBorder;
//   }
//   .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"] > .row:last-child:before {
//     box-shadow: none;
//   }
//   /* Celled Reversed */
//   .ui[class*="tablet reversed"].celled.grid > .row > .column:first-child {
//     box-shadow: @celledColumnDivider;
//   }
//   .ui[class*="tablet reversed"].celled.grid > .row > .column:last-child {
//     box-shadow: none;
//   }
// }
// 
// /* Computer */
// @media only screen and (min-width: @computerBreakpoint) {
//   .ui[class*="computer reversed"].grid,
//   .ui[class*="computer reversed"].grid > .row,
//   .ui.grid > [class*="computer reversed"].row {
//     flex-direction: row-reverse;
//   }
//   .ui[class*="computer vertically reversed"].grid {
//     flex-direction: column-reverse;
//   }
// 
//   /* Divided Reversed */
//   .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
//   .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
//     box-shadow: @dividedBorder;
//   }
//   .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
//   .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
//     box-shadow: none;
//   }
//   /* Vertically Divided Reversed */
//   .ui.grid[class*="vertically divided"][class*="computer vertically reversed"] > .row:first-child:before {
//     box-shadow: @verticallyDividedBorder;
//   }
//   .ui.grid[class*="vertically divided"][class*="computer vertically reversed"] > .row:last-child:before {
//     box-shadow: none;
//   }
//   /* Celled Reversed */
//   .ui[class*="computer reversed"].celled.grid > .row > .column:first-child {
//     box-shadow: @celledColumnDivider;
//   }
//   .ui[class*="computer reversed"].celled.grid > .row > .column:last-child {
//     box-shadow: none;
//   }
// }
// 
// 
// /*-------------------
//       Doubling
// --------------------*/
// 
// /* Tablet Only */
// @media only screen and (min-width: @tabletBreakpoint) and (max-width: @largestTabletScreen) {
//   .ui.doubling.grid {
//     width: auto;
//   }
//   .ui.grid > .doubling.row,
//   .ui.doubling.grid > .row {
//     margin: 0em !important;
//     padding: 0em !important;
//   }
//   .ui.grid > .doubling.row > .column,
//   .ui.doubling.grid > .row > .column {
//     display: inline-block !important;
//     padding-top: (@rowSpacing / 2) !important;
//     padding-bottom: (@rowSpacing / 2) !important;
//     box-shadow: none !important;
//     margin: 0em;
//   }
//   .ui[class*="two column"].doubling.grid > .row > .column,
//   .ui[class*="two column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="two column"].doubling.row.row > .column {
//     width: @oneColumn !important;
//   }
//   .ui[class*="three column"].doubling.grid > .row > .column,
//   .ui[class*="three column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="three column"].doubling.row.row > .column {
//     width: @twoColumn !important;
//   }
//   .ui[class*="four column"].doubling.grid > .row > .column,
//   .ui[class*="four column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="four column"].doubling.row.row > .column {
//     width: @twoColumn !important;
//   }
//   .ui[class*="five column"].doubling.grid > .row > .column,
//   .ui[class*="five column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="five column"].doubling.row.row > .column {
//     width: @threeColumn !important;
//   }
//   .ui[class*="six column"].doubling.grid > .row > .column,
//   .ui[class*="six column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="six column"].doubling.row.row > .column {
//     width: @threeColumn !important;
//   }
//   .ui[class*="seven column"].doubling.grid > .row > .column,
//   .ui[class*="seven column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="seven column"].doubling.row.row > .column {
//     width: @threeColumn !important;
//   }
//   .ui[class*="eight column"].doubling.grid > .row > .column,
//   .ui[class*="eight column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="eight column"].doubling.row.row > .column {
//     width: @fourColumn !important;
//   }
//   .ui[class*="nine column"].doubling.grid > .row > .column,
//   .ui[class*="nine column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="nine column"].doubling.row.row > .column {
//     width: @fourColumn !important;
//   }
//   .ui[class*="ten column"].doubling.grid > .row > .column,
//   .ui[class*="ten column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="ten column"].doubling.row.row > .column {
//     width: @fiveColumn !important;
//   }
//   .ui[class*="eleven column"].doubling.grid > .row > .column,
//   .ui[class*="eleven column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="eleven column"].doubling.row.row > .column {
//     width: @fiveColumn !important;
//   }
//   .ui[class*="twelve column"].doubling.grid > .row > .column,
//   .ui[class*="twelve column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="twelve column"].doubling.row.row > .column {
//     width: @sixColumn !important;
//   }
//   .ui[class*="thirteen column"].doubling.grid > .row > .column,
//   .ui[class*="thirteen column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="thirteen column"].doubling.row.row > .column {
//     width: @sixColumn !important;
//   }
//   .ui[class*="fourteen column"].doubling.grid > .row > .column,
//   .ui[class*="fourteen column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="fourteen column"].doubling.row.row > .column {
//     width: @sevenColumn !important;
//   }
//   .ui[class*="fifteen column"].doubling.grid > .row > .column,
//   .ui[class*="fifteen column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="fifteen column"].doubling.row.row > .column {
//     width: @sevenColumn !important;
//   }
//   .ui[class*="sixteen column"].doubling.grid > .row > .column,
//   .ui[class*="sixteen column"].doubling.grid > .column:not(.row),
//   .ui.grid > [class*="sixteen column"].doubling.row.row > .column {
//     width: @eightColumn !important;
//   }
// }
// 
// /* Mobile Only */
// @media only screen and (max-width: @largestMobileScreen) {
//   .ui.grid > .doubling.row,
//   .ui.doubling.grid > .row {
//     margin: 0em !important;
//     padding: 0em !important;
//   }
//   .ui.grid > .doubling.row > .column,
//   .ui.doubling.grid > .row > .column {
//     padding-top: (@rowSpacing / 2) !important;
//     padding-bottom: (@rowSpacing / 2) !important;
//     margin: 0em !important;
//     box-shadow: none !important;
//   }
//   .ui[class*="two column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="two column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="two column"].doubling:not(.stackable).row.row > .column {
//     width: @oneColumn !important;
//   }
//   .ui[class*="three column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="three column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="three column"].doubling:not(.stackable).row.row > .column {
//     width: @twoColumn !important;
//   }
//   .ui[class*="four column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="four column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="four column"].doubling:not(.stackable).row.row > .column {
//     width: @twoColumn !important;
//   }
//   .ui[class*="five column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="five column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="five column"].doubling:not(.stackable).row.row > .column {
//     width: @twoColumn !important;
//   }
//   .ui[class*="six column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="six column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="six column"].doubling:not(.stackable).row.row > .column {
//     width: @twoColumn !important;
//   }
//   .ui[class*="seven column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="seven column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="seven column"].doubling:not(.stackable).row.row > .column {
//     width: @twoColumn !important;
//   }
//   .ui[class*="eight column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="eight column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="eight column"].doubling:not(.stackable).row.row > .column {
//     width: @twoColumn !important;
//   }
//   .ui[class*="nine column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="nine column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="nine column"].doubling:not(.stackable).row.row > .column {
//     width: @threeColumn !important;
//   }
//   .ui[class*="ten column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="ten column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="ten column"].doubling:not(.stackable).row.row > .column {
//     width: @threeColumn !important;
//   }
//   .ui[class*="eleven column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="eleven column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="eleven column"].doubling:not(.stackable).row.row > .column {
//     width: @threeColumn !important;
//   }
//   .ui[class*="twelve column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="twelve column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="twelve column"].doubling:not(.stackable).row.row > .column {
//     width: @threeColumn !important;
//   }
//   .ui[class*="thirteen column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="thirteen column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="thirteen column"].doubling:not(.stackable).row.row > .column {
//     width: @threeColumn !important;
//   }
//   .ui[class*="fourteen column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="fourteen column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="fourteen column"].doubling:not(.stackable).row.row > .column {
//     width: @fourColumn !important;
//   }
//   .ui[class*="fifteen column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="fifteen column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="fifteen column"].doubling:not(.stackable).row.row > .column {
//     width: @fourColumn !important;
//   }
//   .ui[class*="sixteen column"].doubling:not(.stackable).grid > .row > .column,
//   .ui[class*="sixteen column"].doubling:not(.stackable).grid > .column:not(.row),
//   .ui.grid > [class*="sixteen column"].doubling:not(.stackable).row.row > .column {
//     width: @fourColumn !important;
//   }
// }
// 
// /*-------------------
//       Stackable
// --------------------*/
// 
// @media only screen and (max-width: @largestMobileScreen) {
//   .ui.stackable.grid {
//     width: auto;
//     margin-left: 0em !important;
//     margin-right: 0em !important;
//   }
//   .ui.stackable.grid > .row > .wide.column,
//   .ui.stackable.grid > .wide.column,
//   .ui.stackable.grid > .column.grid > .column,
//   .ui.stackable.grid > .column.row > .column,
//   .ui.stackable.grid > .row > .column,
//   .ui.stackable.grid > .column:not(.row),
//   .ui.grid > .stackable.stackable.row > .column {
//     width: 100% !important;
//     margin: 0em 0em !important;
//     box-shadow: none !important;
//     padding: (@stackableRowSpacing / 2) (@stackableGutter / 2) !important;
//   }
//   .ui.stackable.grid:not(.vertically) > .row {
//     margin: 0em;
//     padding: 0em;
//   }
// 
//   /* Coupling */
//   .ui.container > .ui.stackable.grid > .column,
//   .ui.container > .ui.stackable.grid > .row > .column {
//     padding-left: 0em !important;
//     padding-right: 0em !important;
//   }
// 
//   /* Don't pad inside segment or nested grid */
//   .ui.grid .ui.stackable.grid,
//   .ui.segment:not(.vertical) .ui.stackable.page.grid {
//     margin-left: -(@stackableGutter / 2) !important;
//     margin-right: -(@stackableGutter / 2) !important;
//   }
// 
//   /* Divided Stackable */
//   .ui.stackable.divided.grid > .row:first-child > .column:first-child,
//   .ui.stackable.celled.grid > .row:first-child > .column:first-child,
//   .ui.stackable.divided.grid > .column:not(.row):first-child,
//   .ui.stackable.celled.grid > .column:not(.row):first-child {
//     border-top: none !important;
//   }
//   .ui.inverted.stackable.celled.grid > .column:not(.row),
//   .ui.inverted.stackable.divided.grid > .column:not(.row),
//   .ui.inverted.stackable.celled.grid > .row > .column,
//   .ui.inverted.stackable.divided.grid > .row > .column {
//     border-top: @stackableInvertedMobileBorder;
//   }
// 
//   .ui.stackable.celled.grid > .column:not(.row),
//   .ui.stackable.divided:not(.vertically).grid > .column:not(.row),
//   .ui.stackable.celled.grid > .row > .column,
//   .ui.stackable.divided:not(.vertically).grid > .row > .column {
//     border-top: @stackableMobileBorder;
//     box-shadow: none !important;
//     padding-top: @stackableRowSpacing !important;
//     padding-bottom: @stackableRowSpacing !important;
//   }
// 
//   .ui.stackable.celled.grid > .row {
//     box-shadow: none !important;
//   }
//   .ui.stackable.divided:not(.vertically).grid > .column:not(.row),
//   .ui.stackable.divided:not(.vertically).grid > .row > .column {
//     padding-left: 0em !important;
//     padding-right: 0em !important;
//   }
// 
// }
// 
// /*----------------------
//      Only (Device)
// -----------------------*/
// 
// 
// /* These include arbitrary class repetitions for forced specificity */
// 
// /* Mobile Only Hide */
// @media only screen and (max-width: @largestMobileScreen) {
//   .ui[class*="tablet only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="tablet only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="tablet only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.mobile) {
//     display: none !important;
//   }
//   .ui[class*="computer only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="computer only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="computer only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="computer only"].column:not(.mobile) {
//     display: none !important;
//   }
//   .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile) {
//     display: none !important;
//   }
//   .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
//     display: none !important;
//   }
// }
// /* Tablet Only Hide */
// @media only screen and (min-width: @tabletBreakpoint) and (max-width: @largestTabletScreen) {
//   .ui[class*="mobile only"].grid.grid.grid:not(.tablet),
//   .ui.grid.grid.grid > [class*="mobile only"].row:not(.tablet),
//   .ui.grid.grid.grid > [class*="mobile only"].column:not(.tablet),
//   .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.tablet) {
//     display: none !important;
//   }
//   .ui[class*="computer only"].grid.grid.grid:not(.tablet),
//   .ui.grid.grid.grid > [class*="computer only"].row:not(.tablet),
//   .ui.grid.grid.grid > [class*="computer only"].column:not(.tablet),
//   .ui.grid.grid.grid > .row > [class*="computer only"].column:not(.tablet) {
//     display: none !important;
//   }
//   .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile) {
//     display: none !important;
//   }
//   .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
//     display: none !important;
//   }
// }
// 
// /* Computer Only Hide */
// @media only screen and (min-width: @computerBreakpoint) and (max-width: @largestSmallMonitor) {
//   .ui[class*="mobile only"].grid.grid.grid:not(.computer),
//   .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
//   .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
//   .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
//     display: none !important;
//   }
//   .ui[class*="tablet only"].grid.grid.grid:not(.computer),
//   .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
//   .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
//   .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
//     display: none !important;
//   }
//   .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile) {
//     display: none !important;
//   }
//   .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
//     display: none !important;
//   }
// }
// 
// /* Large Screen Only Hide */
// @media only screen and (min-width: @largeMonitorBreakpoint) and (max-width: @largestLargeMonitor) {
//   .ui[class*="mobile only"].grid.grid.grid:not(.computer),
//   .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
//   .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
//   .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
//     display: none !important;
//   }
//   .ui[class*="tablet only"].grid.grid.grid:not(.computer),
//   .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
//   .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
//   .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
//     display: none !important;
//   }
//   .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
//   .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
//   .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
//   .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
//     display: none !important;
//   }
// }
// 
// /* Widescreen Only Hide */
// @media only screen and (min-width: @widescreenMonitorBreakpoint) {
//   .ui[class*="mobile only"].grid.grid.grid:not(.computer),
//   .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
//   .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
//   .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
//     display: none !important;
//   }
//   .ui[class*="tablet only"].grid.grid.grid:not(.computer),
//   .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
//   .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
//   .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
//     display: none !important;
//   }
// }
// 
// 
// .loadUIOverrides();
// 
