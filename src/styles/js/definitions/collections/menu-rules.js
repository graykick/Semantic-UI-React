/**
 * This file began as a direct copy of the less definition file.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

// /*
//  * # Semantic - Menu
//  * http://github.com/semantic-org/semantic-ui/
//  *
//  *
//  * Copyright 2015 Contributor
//  * Released under the MIT license
//  * http://opensource.org/licenses/MIT
//  *
//  */
// 
// 
// /*******************************
//             Theme
// *******************************/
// 
// @type    : 'collection';
// @element : 'menu';
// 
// @import (multiple) '../../theme.config';
// 
// /*******************************
//             Standard
// *******************************/
// 
// /*--------------
//       Menu
// ---------------*/
// 
// .ui.menu {
//   display: flex;
//   margin: @margin;
//   font-family: @fontFamily;
//   background: @background;
//   font-weight: @fontWeight;
//   border: @border;
//   box-shadow: @boxShadow;
//   border-radius: @borderRadius;
//   min-height: @minHeight;
// }
// 
// .ui.menu:after {
//   content: '';
//   display: block;
//   height: 0px;
//   clear: both;
//   visibility: hidden;
// }
// 
// .ui.menu:first-child {
//   margin-top: 0rem;
// }
// .ui.menu:last-child {
//   margin-bottom: 0rem;
// }
// 
// 
// /*--------------
//     Sub-Menu
// ---------------*/
// 
// .ui.menu .menu {
//   margin: 0em;
// }
// 
// .ui.menu:not(.vertical) > .menu {
//   display: flex;
// }
// 
// /*--------------
//       Item
// ---------------*/
// 
// .ui.menu:not(.vertical) .item {
//   display: flex;
//   align-items: center;
// }
// 
// .ui.menu .item {
//   position: relative;
//   vertical-align: middle;
//   line-height: 1;
//   text-decoration: none;
//   -webkit-tap-highlight-color: transparent;
//   flex: 0 0 auto;
//   user-select: none;
// 
//   background: @itemBackground;
//   padding: @itemVerticalPadding @itemHorizontalPadding;
//   text-transform: @itemTextTransform;
//   color: @itemTextColor;
//   font-weight: @itemFontWeight;
//   transition: @itemTransition;
// }
// 
// .ui.menu > .item:first-child {
//   border-radius: @borderRadius 0px 0px @borderRadius;
// }
// 
// /* Border */
// .ui.menu .item:before {
//   position: absolute;
//   content: '';
//   top: 0%;
//   right: 0px;
//   height: 100%;
// 
//   width: @dividerSize;
//   background: @dividerBackground;
// }
// 
// /*--------------
//   Text Content
// ---------------*/
// 
// .ui.menu .text.item > *,
// .ui.menu .item > a:not(.ui),
// .ui.menu .item > p:only-child {
//   user-select: text;
//   line-height: @textLineHeight;
// }
// .ui.menu .item > p:first-child {
//   margin-top: 0;
// }
// .ui.menu .item > p:last-child {
//   margin-bottom: 0;
// }
// 
// /*--------------
//       Icons
// ---------------*/
// 
// .ui.menu .item > i.icon {
//   opacity: @iconOpacity;
//   float: @iconFloat;
//   margin: @iconMargin;
// }
// 
// /*--------------
//      Button
// ---------------*/
// 
// .ui.menu:not(.vertical) .item > .button {
//   position: relative;
//   top: @buttonOffset;
//   margin: @buttonMargin;
//   padding-bottom: @buttonVerticalPadding;
//   padding-top: @buttonVerticalPadding;
//   font-size: @buttonSize;
// }
// 
// /*----------------
//  Grid / Container
// -----------------*/
// 
// .ui.menu >  .grid,
// .ui.menu > .container {
//   display: flex;
//   align-items: inherit;
//   flex-direction: inherit;
// }
// 
// /*--------------
//      Inputs
// ---------------*/
// 
// .ui.menu .item > .input {
//   width: 100%;
// }
// .ui.menu:not(.vertical) .item > .input {
//   position: relative;
//   top: @inputOffset;
//   margin: @inputVerticalMargin 0em;
// }
// .ui.menu .item > .input input {
//   font-size: @inputSize;
//   padding-top: @inputVerticalPadding;
//   padding-bottom: @inputVerticalPadding;
// }
// 
// 
// /*--------------
//      Header
// ---------------*/
// 
// .ui.menu .header.item,
// .ui.vertical.menu .header.item {
//   margin: 0em;
//   background: @headerBackground;
//   text-transform: @headerTextTransform;
//   font-weight: @headerWeight;
// }
// 
// .ui.vertical.menu .item > .header:not(.ui) {
//   margin: @verticalHeaderMargin;
//   font-size: @verticalHeaderFontSize;
//   font-weight: @verticalHeaderFontWeight;
// }
// 
// /*--------------
//     Dropdowns
// ---------------*/
// 
// 
// /* Dropdown Icon */
// .ui.menu .item > i.dropdown.icon {
//   padding: 0em;
//   float: @dropdownIconFloat;
//   margin: 0em 0em 0em @dropdownIconDistance;
// }
// 
// /* Menu */
// .ui.menu .dropdown.item .menu {
//   min-width: ~"calc(100% - 1px)";
//   border-radius: 0em 0em @dropdownMenuBorderRadius @dropdownMenuBorderRadius;
//   background: @dropdownBackground;
//   margin: @dropdownMenuDistance 0px 0px;
//   box-shadow: @dropdownMenuBoxShadow;
//   flex-direction: column !important;
// }
// 
// 
// /* Menu Items */
// .ui.menu .ui.dropdown .menu > .item {
//   margin: 0;
//   text-align: left;
//   font-size: @dropdownItemFontSize !important;
//   padding: @dropdownItemPadding !important;
//   background: @dropdownItemBackground !important;
//   color: @dropdownItemColor !important;
//   text-transform: @dropdownItemTextTransform !important;
//   font-weight: @dropdownItemFontWeight !important;
//   box-shadow: @dropdownItemBoxShadow !important;
//   transition: @dropdownItemTransition !important;
// }
// .ui.menu .ui.dropdown .menu > .item:hover {
//   background: @dropdownHoveredItemBackground !important;
//   color: @dropdownHoveredItemColor !important;
// }
// .ui.menu .ui.dropdown .menu > .selected.item {
//   background: @dropdownSelectedItemBackground !important;
//   color: @dropdownSelectedItemColor !important;
// }
// .ui.menu .ui.dropdown .menu > .active.item {
//   background: @dropdownActiveItemBackground !important;
//   font-weight: @dropdownActiveItemFontWeight !important;
//   color: @dropdownActiveItemColor !important;
// }
// 
// .ui.menu .ui.dropdown.item .menu .item:not(.filtered) {
//   display: block;
// }
// .ui.menu .ui.dropdown .menu > .item .icon:not(.dropdown) {
//   display: inline-block;
//   font-size: @dropdownItemIconFontSize !important;
//   float: @dropdownItemIconFloat;
//   margin: @dropdownItemIconMargin;
// }
// 
// 
// /* Secondary */
// .ui.secondary.menu .dropdown.item > .menu,
// .ui.text.menu .dropdown.item > .menu {
//   border-radius: @dropdownMenuBorderRadius;
//   margin-top: @secondaryDropdownMenuDistance;
// }
// 
// /* Pointing */
// .ui.menu .pointing.dropdown.item .menu {
//   margin-top: @pointingDropdownMenuDistance;
// }
// 
// /* Inverted */
// .ui.inverted.menu .search.dropdown.item > .search,
// .ui.inverted.menu .search.dropdown.item > .text {
//   color: @invertedSelectionDropdownColor;
// }
// 
// /* Vertical */
// .ui.vertical.menu .dropdown.item > .icon {
//   float: right;
//   content: "\f0da";
//   margin-left: 1em;
// }
// .ui.vertical.menu .dropdown.item .menu {
//   left: 100%;
//   min-width: 0;
//   margin: 0em 0em 0em @dropdownMenuDistance;
//   box-shadow: @dropdownVerticalMenuBoxShadow;
//   border-radius: 0em @dropdownMenuBorderRadius @dropdownMenuBorderRadius @dropdownMenuBorderRadius;
// }
// .ui.vertical.menu .dropdown.item.upward .menu {
//   bottom: 0;
// }
// .ui.vertical.menu .dropdown.item:not(.upward) .menu {
//   top: 0;
// }
// .ui.vertical.menu .active.dropdown.item {
//   border-top-right-radius: 0em;
//   border-bottom-right-radius: 0em;
// }
// .ui.vertical.menu .dropdown.active.item {
//   box-shadow: none;
// }
// 
// /* Evenly Divided */
// .ui.item.menu .dropdown .menu .item {
//   width: 100%;
// }
// 
// /*--------------
//      Labels
// ---------------*/
// 
// .ui.menu .item > .label {
//   background: @labelBackground;
//   color: @labelTextColor;
//   margin-left: @labelTextMargin;
//   padding: @labelVerticalPadding @labelHorizontalPadding;
// }
// .ui.vertical.menu .item > .label {
//   background: @labelBackground;
//   color: @labelTextColor;
//   margin-top: @labelOffset;
//   margin-bottom: @labelOffset;
//   padding: @labelVerticalPadding @labelHorizontalPadding;
// }
// .ui.menu .item > .floating.label {
//   padding: @labelVerticalPadding @labelHorizontalPadding;
// }
// 
// /*--------------
//      Images
// ---------------*/
// 
// .ui.menu .item > img:not(.ui) {
//   display: inline-block;
//   vertical-align: middle;
//   margin: @imageMargin;
//   width: @imageWidth;
// }
// .ui.vertical.menu .item > img:not(.ui):only-child {
//   display: block;
//   max-width: 100%;
//   width: @verticalImageWidth;
// }
// 
// /*******************************
//           Coupling
// *******************************/
// 
// /*--------------
//      List
// ---------------*/
// 
// /* Menu divider shouldnt apply */
// .ui.menu .list .item:before {
//   background: none !important;
// }
// 
// /*--------------
//      Sidebar
// ---------------*/
// 
// /* Show vertical dividers below last */
// 
// .ui.vertical.sidebar.menu > .item:first-child:before {
//   display: block !important;
// }
// .ui.vertical.sidebar.menu > .item::before {
//   top: auto;
//   bottom: 0px;
// }
// 
// /*--------------
//     Container
// ---------------*/
// 
// @media only screen and (max-width: @largestMobileScreen) {
//   .ui.menu > .ui.container {
//     width: 100% !important;
//     margin-left: 0em !important;
//     margin-right: 0em !important;
//   }
// }
// @media only screen and (min-width: @tabletBreakpoint) {
//   .ui.menu:not(.secondary):not(.text):not(.tabular):not(.borderless) > .container > .item:not(.right):not(.borderless):first-child {
//     border-left: @dividerSize solid @dividerBackground;
//   }
// }
// 
// 
// /*******************************
//              States
// *******************************/
// 
// /*--------------
//       Hover
// ---------------*/
// 
// 
// .ui.link.menu .item:hover,
// .ui.menu .dropdown.item:hover,
// .ui.menu .link.item:hover,
// .ui.menu a.item:hover {
//   cursor: pointer;
//   background: @hoverItemBackground;
//   color: @hoverItemTextColor;
// }
// 
// 
// /*--------------
//      Pressed
// ---------------*/
// 
// .ui.link.menu .item:active,
// .ui.menu .link.item:active,
// .ui.menu a.item:active {
//   background: @pressedItemBackground;
//   color: @pressedItemTextColor;
// }
// 
// 
// /*--------------
//      Active
// ---------------*/
// 
// .ui.menu .active.item  {
//   background: @activeItemBackground;
//   color: @activeItemTextColor;
//   font-weight: @activeItemFontWeight;
//   box-shadow: @activeItemBoxShadow;
// }
// .ui.menu .active.item > i.icon {
//   opacity: @activeIconOpacity;
// }
// 
// /*--------------
//   Active Hover
// ---------------*/
// 
// .ui.menu .active.item:hover,
// .ui.vertical.menu .active.item:hover {
//   background-color: @activeHoverItemBackground;
//   color: @activeHoverItemColor;
// }
// 
// 
// /*--------------
//      Disabled
// ---------------*/
// 
// .ui.menu .item.disabled,
// .ui.menu .item.disabled:hover {
//   cursor: default !important;
//   background-color: transparent !important;
//   color: @disabledTextColor !important;
// }
// 
// 
// /*******************************
//              Types
// *******************************/
// 
// /*------------------
// Floated Menu / Item
// -------------------*/
// 
// /* Left Floated */
// .ui.menu:not(.vertical) .left.item,
// .ui.menu:not(.vertical) .left.menu {
//   display: flex;
//   margin-right: auto !important;
// }
// /* Right Floated */
// .ui.menu:not(.vertical) .right.item,
// .ui.menu:not(.vertical) .right.menu {
//   display: flex;
//   margin-left: auto !important;
// }
// 
// /* Swapped Borders */
// .ui.menu .right.item::before,
// .ui.menu .right.menu > .item::before {
//   right: auto;
//   left: 0;
// }
// 
// 
// /*--------------
//     Vertical
// ---------------*/
// 
// .ui.vertical.menu {
//   display: block;
//   flex-direction: column;
//   background: @verticalBackground;
//   box-shadow: @verticalBoxShadow;
// }
// 
// /*--- Item ---*/
// .ui.vertical.menu .item {
//   display: block;
//   background: @verticalItemBackground;
//   border-top: none;
//   border-right: none;
// }
// .ui.vertical.menu > .item:first-child {
//   border-radius: @borderRadius @borderRadius 0px 0px;
// }
// .ui.vertical.menu > .item:last-child {
//   border-radius: 0px 0px @borderRadius @borderRadius;
// }
// 
// /*--- Label ---*/
// .ui.vertical.menu .item > .label {
//   float: right;
//   text-align: center;
// }
// 
// /*--- Icon ---*/
// .ui.vertical.menu .item > i.icon {
//   width: @iconWidth;
//   float: @verticalIconFloat;
//   margin: @verticalIconMargin;
// }
// .ui.vertical.menu .item > .label + i.icon {
//   float: @labelAndIconFloat;
//   margin: @labelAndIconMargin;
// }
// 
// 
// /*--- Border ---*/
// .ui.vertical.menu .item:before {
//   position: absolute;
//   content: '';
//   top: 0%;
//   left: 0px;
//   width: 100%;
//   height: @dividerSize;
//   background: @verticalDividerBackground;
// }
// 
// .ui.vertical.menu .item:first-child:before {
//   display: none !important;
// }
// 
// 
// /*--- Sub Menu ---*/
// .ui.vertical.menu .item > .menu {
//   margin: @subMenuMargin;
// }
// .ui.vertical.menu .menu .item {
//   background: none;
//   padding: @subMenuVerticalPadding @subMenuHorizontalPadding;
//   font-size: @subMenuFontSize;
//   color: @subMenuTextColor;
// }
// .ui.vertical.menu .item .menu a.item:hover,
// .ui.vertical.menu .item .menu .link.item:hover {
//   color: @darkTextColor;
// }
// .ui.vertical.menu .menu .item:before {
//   display: none;
// }
// 
// /* Vertical Active */
// .ui.vertical.menu .active.item {
//   background: @activeItemBackground;
//   border-radius: 0em;
//   box-shadow: @verticalActiveBoxShadow;
// }
// .ui.vertical.menu > .active.item:first-child {
//   border-radius: @borderRadius @borderRadius 0em 0em;
// }
// .ui.vertical.menu > .active.item:last-child {
//   border-radius: 0em 0em @borderRadius @borderRadius;
// }
// .ui.vertical.menu > .active.item:only-child {
//   border-radius: @borderRadius;
// }
// .ui.vertical.menu .active.item .menu .active.item {
//   border-left: none;
// }
// .ui.vertical.menu .item .menu .active.item {
//   background-color: @subMenuActiveBackground;
//   font-weight: @subMenuActiveFontWeight;
//   color: @subMenuActiveTextColor;
// }
// 
// 
// /*--------------
//      Tabular
// ---------------*/
// 
// .ui.tabular.menu {
//   border-radius: 0em;
//   box-shadow: none !important;
//   border: none;
//   background: @tabularBackground;
//   border-bottom: @tabularBorderWidth solid @tabularBorderColor;
// }
// .ui.tabular.fluid.menu {
//   width: @tabularFluidWidth !important;
// }
// .ui.tabular.menu .item {
//   background: transparent;
//   border-bottom: none;
// 
//   border-left: @tabularBorderWidth solid transparent;
//   border-right: @tabularBorderWidth solid transparent;
//   border-top: @tabularOppositeBorderWidth solid transparent;
//   padding: @tabularVerticalPadding @tabularHorizontalPadding;
//   color: @tabularTextColor;
// }
// .ui.tabular.menu .item:before {
//   display: none;
// }
// 
// /* Hover */
// .ui.tabular.menu .item:hover {
//   background-color: transparent;
//   color: @tabularHoveredTextColor;
// }
// 
// /* Active */
// .ui.tabular.menu .active.item {
//   background: @tabularActiveBackground;
//   color: @tabularActiveColor;
//   border-top-width: @tabularBorderWidth;
//   border-color: @tabularBorderColor;
//   font-weight: @tabularActiveWeight;
//   margin-bottom: -@tabularBorderWidth;
//   box-shadow: @tabularActiveBoxShadow;
//   border-radius: @tabularBorderRadius @tabularBorderRadius 0px 0px !important;
// }
// 
// /* Coupling with segment for attachment */
// .ui.tabular.menu + .attached:not(.top).segment,
// .ui.tabular.menu + .attached:not(.top).segment + .attached:not(.top).segment {
//   border-top: none;
//   margin-left: 0px;
//   margin-top: 0px;
//   margin-right: 0px;
//   width: 100%;
// }
// .top.attached.segment + .ui.bottom.tabular.menu {
//   position: relative;
//   width: @tabularFluidWidth;
//   left: -@tabularFluidOffset;
// }
// 
// /* Bottom Vertical Tabular */
// .ui.bottom.tabular.menu {
//   background: @tabularBackground;
//   border-radius: 0em;
//   box-shadow: none !important;
//   border-bottom: none;
//   border-top: @tabularBorderWidth solid @tabularBorderColor;
// }
// .ui.bottom.tabular.menu .item {
//   background: none;
//   border-left: @tabularBorderWidth solid transparent;
//   border-right: @tabularBorderWidth solid transparent;
//   border-bottom: @tabularBorderWidth solid transparent;
//   border-top: none;
// }
// .ui.bottom.tabular.menu .active.item {
//   background: @tabularActiveBackground;
//   color: @tabularActiveColor;
//   border-color: @tabularBorderColor;
//   margin: -@tabularBorderWidth 0px 0px 0px;
//   border-radius: 0px 0px @tabularBorderRadius @tabularBorderRadius !important;
// }
// 
// /* Vertical Tabular (Left) */
// .ui.vertical.tabular.menu {
//   background: @tabularVerticalBackground;
//   border-radius: 0em;
//   box-shadow: none !important;
//   border-bottom: none;
//   border-right: @tabularBorderWidth solid @tabularBorderColor;
// }
// .ui.vertical.tabular.menu .item {
//   background: none;
//   border-left: @tabularBorderWidth solid transparent;
//   border-bottom: @tabularBorderWidth solid transparent;
//   border-top: @tabularBorderWidth solid transparent;
//   border-right: none;
// }
// .ui.vertical.tabular.menu .active.item {
//   background: @tabularActiveBackground;
//   color: @tabularActiveColor;
//   border-color: @tabularBorderColor;
//   margin: 0px -@tabularBorderWidth 0px 0px;
//   border-radius: @tabularBorderRadius 0px 0px @tabularBorderRadius !important;
// }
// 
// /* Vertical Right Tabular */
// .ui.vertical.right.tabular.menu {
//   background: @tabularVerticalBackground;
//   border-radius: 0em;
//   box-shadow: none !important;
//   border-bottom: none;
//   border-right: none;
//   border-left: @tabularBorderWidth solid @tabularBorderColor;
// }
// .ui.vertical.right.tabular.menu .item {
//   background: none;
//   border-right: @tabularBorderWidth solid transparent;
//   border-bottom: @tabularBorderWidth solid transparent;
//   border-top: @tabularBorderWidth solid transparent;
//   border-left: none;
// }
// .ui.vertical.right.tabular.menu .active.item {
//   background: @tabularActiveBackground;
//   color: @tabularActiveColor;
//   border-color: @tabularBorderColor;
//   margin: 0px 0px 0px -@tabularBorderWidth;
//   border-radius: 0px @tabularBorderRadius @tabularBorderRadius 0px !important;
// }
// 
// /* Dropdown */
// .ui.tabular.menu .active.dropdown.item {
//   margin-bottom: 0px;
//   border-left: @tabularBorderWidth solid transparent;
//   border-right: @tabularBorderWidth solid transparent;
//   border-top: @tabularOppositeBorderWidth solid transparent;
//   border-bottom: none;
// }
// 
// 
// 
// /*--------------
//    Pagination
// ---------------*/
// 
// .ui.pagination.menu {
//   margin: 0em;
//   display: inline-flex;
//   vertical-align: middle;
// }
// .ui.pagination.menu .item:last-child {
//   border-radius: 0em @borderRadius @borderRadius 0em;
// }
// .ui.compact.menu .item:last-child {
//   border-radius: 0em @borderRadius @borderRadius 0em;
// }
// .ui.pagination.menu .item:last-child:before {
//   display: none;
// }
// 
// .ui.pagination.menu .item {
//   min-width: @paginationMinWidth;
//   text-align: center;
// }
// .ui.pagination.menu .icon.item i.icon {
//   vertical-align: top;
// }
// 
// /* Active */
// .ui.pagination.menu .active.item {
//   border-top: none;
//   padding-top: @itemVerticalPadding;
//   background-color: @paginationActiveBackground;
//   color: @paginationActiveTextColor;
//   box-shadow: none;
// }
// 
// /*--------------
//    Secondary
// ---------------*/
// 
// .ui.secondary.menu {
//   background: @secondaryBackground;
//   margin-left: -@secondaryItemSpacing;
//   margin-right: -@secondaryItemSpacing;
//   border-radius: 0em;
//   border: none;
//   box-shadow: none;
// }
// 
// /* Item */
// .ui.secondary.menu .item {
//   align-self: center;
//   box-shadow: none;
//   border: none;
//   padding: @secondaryItemPadding;
//   margin: @secondaryItemMargin;
//   background: @secondaryItemBackground;
//   transition: @secondaryItemTransition;
//   border-radius: @secondaryItemBorderRadius;
// }
// 
// /* No Divider */
// .ui.secondary.menu .item:before {
//   display: none !important;
// }
// 
// /* Header */
// .ui.secondary.menu .header.item {
//   border-radius: 0em;
//   border-right: @secondaryHeaderBorder;
//   background: @secondaryHeaderBackground;
// }
// 
// /* Image */
// .ui.secondary.menu .item > img:not(.ui) {
//   margin: 0em;
// }
// 
// /* Hover */
// .ui.secondary.menu .dropdown.item:hover,
// .ui.secondary.menu .link.item:hover,
// .ui.secondary.menu a.item:hover {
//   background: @secondaryHoverItemBackground;
//   color: @secondaryHoverItemColor;
// }
// 
// /* Active */
// .ui.secondary.menu .active.item {
//   box-shadow: none;
//   background: @secondaryActiveItemBackground;
//   color: @secondaryActiveItemColor;
//   border-radius: @secondaryItemBorderRadius;
// }
// 
// /* Active Hover */
// .ui.secondary.menu .active.item:hover {
//   box-shadow: none;
//   background: @secondaryActiveHoverItemBackground;
//   color: @secondaryActiveHoverItemColor;
// }
// 
// 
// /* Inverted */
// .ui.secondary.inverted.menu .link.item,
// .ui.secondary.inverted.menu a.item {
//   color: @secondaryInvertedColor !important;
// }
// .ui.secondary.inverted.menu .dropdown.item:hover,
// .ui.secondary.inverted.menu .link.item:hover,
// .ui.secondary.inverted.menu a.item:hover {
//   background: @secondaryInvertedHoverBackground;
//   color: @secondaryInvertedHoverColor !important;
// }
// .ui.secondary.inverted.menu .active.item {
//   background: @secondaryInvertedActiveBackground;
//   color: @secondaryInvertedActiveColor !important;
// }
// 
// /* Fix item margins */
// .ui.secondary.item.menu {
//   margin-left: 0em;
//   margin-right: 0em;
// }
// .ui.secondary.item.menu .item:last-child {
//   margin-right: 0em;
// }
// .ui.secondary.attached.menu {
//   box-shadow: none;
// }
// 
// /* Sub Menu */
// .ui.vertical.secondary.menu .item:not(.dropdown) > .menu {
//   margin: @secondaryMenuSubMenuMargin;
// }
// .ui.vertical.secondary.menu .item:not(.dropdown) > .menu > .item {
//   margin: @secondaryMenuSubMenuItemMargin;
//   padding: @secondaryMenuSubMenuItemPadding;
// }
// 
// 
// /*---------------------
//    Secondary Vertical
// -----------------------*/
// 
// .ui.secondary.vertical.menu > .item {
//   border: none;
//   margin: @secondaryVerticalItemMargin;
//   border-radius: @secondaryVerticalItemBorderRadius !important;
// }
// .ui.secondary.vertical.menu > .header.item {
//   border-radius: 0em;
// }
// 
// /* Sub Menu */
// .ui.vertical.secondary.menu .item > .menu .item {
//   background-color: transparent;
// }
// 
// /* Inverted */
// .ui.secondary.inverted.menu {
//   background-color: transparent;
// }
// 
// /*---------------------
//    Secondary Pointing
// -----------------------*/
// 
// .ui.secondary.pointing.menu {
//   margin-left: 0em;
//   margin-right: 0em;
//   border-bottom: @secondaryPointingBorderWidth solid @secondaryPointingBorderColor;
// }
// 
// .ui.secondary.pointing.menu .item {
//   border-bottom-color: transparent;
//   border-bottom-style: solid;
//   border-radius: 0em;
//   align-self: flex-end;
// 
//   margin: 0em 0em -@secondaryPointingBorderWidth;
//   padding: @secondaryPointingItemVerticalPadding @secondaryPointingItemHorizontalPadding;
//   border-bottom-width: @secondaryPointingBorderWidth;
//   transition: @secondaryItemTransition;
// }
// 
// /* Item Types */
// .ui.secondary.pointing.menu .header.item {
//   color: @secondaryPointingHeaderColor !important;
// }
// .ui.secondary.pointing.menu .text.item {
//   box-shadow: none !important;
// }
// .ui.secondary.pointing.menu .item:after {
//   display: none;
// }
// 
// /* Hover */
// .ui.secondary.pointing.menu .dropdown.item:hover,
// .ui.secondary.pointing.menu .link.item:hover,
// .ui.secondary.pointing.menu a.item:hover {
//   background-color: transparent;
//   color: @secondaryPointingHoverTextColor;
// }
// 
// /* Pressed */
// .ui.secondary.pointing.menu .dropdown.item:active,
// .ui.secondary.pointing.menu .link.item:active,
// .ui.secondary.pointing.menu a.item:active {
//   background-color: transparent;
//   border-color: @secondaryPointingBorderColor;
// }
// 
// /* Active */
// .ui.secondary.pointing.menu .active.item {
//   background-color: transparent;
//   box-shadow: none;
//   border-color: @secondaryPointingActiveBorderColor;
//   font-weight: @secondaryPointingActiveFontWeight;
//   color: @secondaryPointingActiveTextColor;
// }
// 
// /* Active Hover */
// .ui.secondary.pointing.menu .active.item:hover {
//   border-color: @secondaryPointingActiveHoverBorderColor;
//   color: @secondaryPointingActiveHoverTextColor;
// }
// 
// /* Active Dropdown */
// .ui.secondary.pointing.menu .active.dropdown.item {
//   border-color: @secondaryPointingActiveDropdownBorderColor;
// }
// 
// /* Vertical Pointing */
// .ui.secondary.vertical.pointing.menu {
//   border-bottom-width: 0px;
//   border-right-width: @secondaryPointingBorderWidth;
//   border-right-style: solid;
//   border-right-color: @secondaryPointingBorderColor;
// }
// .ui.secondary.vertical.pointing.menu .item {
//   border-bottom: none;
//   border-right-style: solid;
//   border-right-color: transparent;
//   border-radius: 0em !important;
//   margin: @secondaryVerticalPointingItemMargin;
//   border-right-width: @secondaryPointingBorderWidth;
// }
// 
// /* Vertical Active */
// .ui.secondary.vertical.pointing.menu .active.item {
//   border-color: @secondaryPointingActiveBorderColor;
// }
// 
// /* Inverted */
// .ui.secondary.inverted.pointing.menu {
//   border-color: @secondaryPointingInvertedBorderColor;
// }
// 
// .ui.secondary.inverted.pointing.menu {
//   border-width: @secondaryPointingBorderWidth;
//   border-color: @secondaryPointingBorderColor;
// }
// .ui.secondary.inverted.pointing.menu .item {
//   color: @secondaryPointingInvertedItemTextColor;
// }
// .ui.secondary.inverted.pointing.menu .header.item {
//   color: @secondaryPointingInvertedItemHeaderColor !important;
// }
// 
// /* Hover */
// .ui.secondary.inverted.pointing.menu .link.item:hover,
// .ui.secondary.inverted.pointing.menu a.item:hover {
//   color: @secondaryPointingInvertedItemHoverTextColor;
// }
// 
// 
// /* Active */
// .ui.secondary.inverted.pointing.menu .active.item {
//   border-color: @secondaryPointingInvertedActiveBorderColor;
//   color: @secondaryPointingInvertedActiveColor;
// }
// 
// /*--------------
//     Text Menu
// ---------------*/
// 
// .ui.text.menu {
//   background: none transparent;
//   border-radius: 0px;
//   box-shadow: none;
//   border: none;
// 
//   margin: @textMenuMargin;
// }
// .ui.text.menu .item {
//   border-radius: 0px;
//   box-shadow: none;
//   align-self: center;
//   margin: @textMenuItemMargin;
//   padding: @textMenuItemPadding;
//   font-weight: @textMenuItemFontWeight;
//   color: @textMenuItemColor;
//   transition: @textMenuItemTransition;
// }
// 
// /* Border */
// .ui.text.menu .item:before,
// .ui.text.menu .menu .item:before {
//   display: none !important;
// }
// 
// /* Header */
// .ui.text.menu .header.item {
//   background-color: transparent;
//   opacity: 1;
//   color: @textMenuHeaderColor;
//   font-size: @textMenuHeaderSize;
//   text-transform: @textMenuHeaderTextTransform;
//   font-weight: @textMenuHeaderFontWeight;
// }
// 
// /* Image */
// .ui.text.menu .item > img:not(.ui) {
//   margin: 0em;
// }
// 
// /*--- fluid text ---*/
// .ui.text.item.menu .item {
//   margin: 0em;
// }
// 
// /*--- vertical text ---*/
// .ui.vertical.text.menu {
//   margin: @textVerticalMenuMargin;
// }
// .ui.vertical.text.menu:first-child {
//   margin-top: 0rem;
// }
// .ui.vertical.text.menu:last-child {
//   margin-bottom: 0rem;
// }
// .ui.vertical.text.menu .item {
//   margin: @textVerticalMenuItemMargin;
//   padding-left: 0em;
//   padding-right: 0em;
// }
// .ui.vertical.text.menu .item > i.icon {
//   float: @textVerticalMenuIconFloat;
//   margin: @iconMargin;
// }
// .ui.vertical.text.menu .header.item {
//   margin: @textVerticalMenuHeaderMargin;
// }
// 
// /* Vertical Sub Menu */
// .ui.vertical.text.menu .item:not(.dropdown) > .menu {
//   margin: @textMenuSubMenuMargin;
// }
// .ui.vertical.text.menu .item:not(.dropdown) > .menu > .item {
//   margin: @textMenuSubMenuItemMargin;
//   padding: @textMenuSubMenuItemPadding;
// }
// 
// /*--- hover ---*/
// .ui.text.menu .item:hover {
//   opacity: 1;
//   background-color: transparent;
// }
// 
// /*--- active ---*/
// .ui.text.menu .active.item {
//   background-color: transparent;
//   border: none;
//   box-shadow: none;
//   font-weight: @textMenuActiveItemFontWeight;
//   color: @textMenuActiveItemColor;
// }
// 
// /*--- active hover ---*/
// .ui.text.menu .active.item:hover {
//   background-color: transparent;
// }
// 
// /* Disable Bariations */
// .ui.text.pointing.menu .active.item:after {
//   box-shadow: none;
// }
// .ui.text.attached.menu {
//   box-shadow: none;
// }
// 
// /* Inverted */
// .ui.inverted.text.menu,
// .ui.inverted.text.menu .item,
// .ui.inverted.text.menu .item:hover,
// .ui.inverted.text.menu .active.item {
//   background-color: transparent !important;
// }
// 
// /* Fluid */
// .ui.fluid.text.menu {
//   margin-left: 0em;
//   margin-right: 0em;
// }
// 
// /*--------------
//     Icon Only
// ---------------*/
// 
// /* Vertical Menu */
// .ui.vertical.icon.menu {
//   display: inline-block;
//   width: auto;
// }
// 
// /* Item */
// .ui.icon.menu .item {
//   height: auto;
//   text-align: @iconMenuTextAlign;
//   color: @iconMenuItemColor;
// }
// 
// /* Icon */
// .ui.icon.menu .item > .icon:not(.dropdown) {
//   margin: 0;
//   opacity: 1;
// }
// 
// /* Icon Gylph */
// .ui.icon.menu .icon:before {
//   opacity: 1;
// }
// 
// /* (x) Item Icon */
// .ui.menu .icon.item > .icon {
//   width: auto;
//   margin: 0em auto;
// }
// 
// /* Vertical Icon */
// .ui.vertical.icon.menu .item > .icon:not(.dropdown) {
//   display: block;
//   opacity: 1;
//   margin: 0em auto;
//   float: none;
// }
// 
// /* Inverted */
// .ui.inverted.icon.menu .item {
//   color: @iconMenuInvertedItemColor;
// }
// 
// /*--------------
//    Labeled Icon
// ---------------*/
// 
// /* Menu */
// .ui.labeled.icon.menu {
//   text-align: center;
// }
// 
// /* Item */
// .ui.labeled.icon.menu  .item {
//   min-width: @labeledIconMinWidth;
//   flex-direction: column;
// }
// 
// /* Icon */
// .ui.labeled.icon.menu .item > .icon:not(.dropdown) {
//   height: 1em;
//   display: block;
//   font-size: @labeledIconSize !important;
//   margin: 0em auto @labeledIconTextMargin !important;
// }
// 
// /* Fluid */
// .ui.fluid.labeled.icon.menu > .item {
//   min-width: 0em;
// }
// 
// 
// /*******************************
//            Variations
// *******************************/
// 
// /*--------------
//     Stackable
// ---------------*/
// 
// @media only screen and (max-width: @largestMobileScreen) {
//   .ui.stackable.menu {
//     flex-direction: column;
//   }
//   .ui.stackable.menu .item {
//     width: 100% !important;
//   }
//   .ui.stackable.menu .item:before {
//     position: absolute;
//     content: '';
//     top: auto;
//     bottom: 0px;
//     left: 0px;
//     width: 100%;
//     height: @dividerSize;
//     background: @verticalDividerBackground;
//   }
// 
//   .ui.stackable.menu .left.menu,
//   .ui.stackable.menu .left.item {
//     margin-right: 0 !important;
//   }
//   .ui.stackable.menu .right.menu,
//   .ui.stackable.menu .right.item {
//     margin-left: 0 !important;
//   }
// 
//   .ui.stackable.menu .right.menu,
//   .ui.stackable.menu .left.menu {
//     flex-direction: column;
//   }
// }
// 
// /*--------------
//      Colors
// ---------------*/
// 
// /*--- Standard Colors  ---*/
// .ui.menu .red.active.item,
// .ui.red.menu .active.item {
//   border-color: @red !important;
//   color: @red !important;
// }
// .ui.menu .orange.active.item,
// .ui.orange.menu .active.item {
//   border-color: @orange !important;
//   color: @orange !important;
// }
// .ui.menu .yellow.active.item,
// .ui.yellow.menu .active.item {
//   border-color: @yellow !important;
//   color: @yellow !important;
// }
// .ui.menu .olive.active.item,
// .ui.olive.menu .active.item {
//   border-color: @olive !important;
//   color: @olive !important;
// }
// .ui.menu .green.active.item,
// .ui.green.menu .active.item {
//   border-color: @green !important;
//   color: @green !important;
// }
// .ui.menu .teal.active.item,
// .ui.teal.menu .active.item {
//   border-color: @teal !important;
//   color: @teal !important;
// }
// .ui.menu .blue.active.item,
// .ui.blue.menu .active.item {
//   border-color: @blue !important;
//   color: @blue !important;
// }
// .ui.menu .violet.active.item,
// .ui.violet.menu .active.item {
//   border-color: @violet !important;
//   color: @violet !important;
// }
// .ui.menu .purple.active.item,
// .ui.purple.menu .active.item {
//   border-color: @purple !important;
//   color: @purple !important;
// }
// .ui.menu .pink.active.item,
// .ui.pink.menu .active.item {
//   border-color: @pink !important;
//   color: @pink !important;
// }
// .ui.menu .brown.active.item,
// .ui.brown.menu .active.item {
//   border-color: @brown !important;
//   color: @brown !important;
// }
// .ui.menu .grey.active.item,
// .ui.grey.menu .active.item {
//   border-color: @grey !important;
//   color: @grey !important;
// }
// 
// 
// /*--------------
//     Inverted
// ---------------*/
// 
// .ui.inverted.menu {
//   border: @invertedBorder;
//   background: @invertedBackground;
//   box-shadow: @invertedBoxShadow;
// }
// 
// /* Menu Item */
// .ui.inverted.menu .item,
// .ui.inverted.menu .item > a:not(.ui) {
//   background: @invertedItemBackground;
//   color: @invertedItemTextColor;
// }
// .ui.inverted.menu .item.menu {
//   background: @invertedSubMenuBackground;
// }
// 
// /*--- Border ---*/
// .ui.inverted.menu .item:before {
//   background: @invertedDividerBackground;
// }
// .ui.vertical.inverted.menu .item:before {
//   background: @invertedVerticalDividerBackground;
// }
// 
// /* Sub Menu */
// .ui.vertical.inverted.menu .menu .item,
// .ui.vertical.inverted.menu .menu .item a:not(.ui) {
//   color: @invertedSubMenuColor;
// }
// 
// /* Header */
// .ui.inverted.menu .header.item {
//   margin: 0em;
//   background: @invertedHeaderBackground;
//   box-shadow: none;
// }
// 
// /* Disabled */
// .ui.inverted.menu .item.disabled,
// .ui.inverted.menu .item.disabled:hover {
//   color: @invertedDisabledTextColor;
// }
// 
// /*--- Hover ---*/
// .ui.link.inverted.menu .item:hover,
// .ui.inverted.menu .dropdown.item:hover,
// .ui.inverted.menu .link.item:hover,
// .ui.inverted.menu a.item:hover {
//   background: @invertedHoverBackground;
//   color: @invertedHoverColor;
// }
// .ui.vertical.inverted.menu .item .menu a.item:hover,
// .ui.vertical.inverted.menu .item .menu .link.item:hover {
//   background: @invertedSubMenuBackground;
//   color: @invertedSubMenuHoverColor;
// }
// 
// /*--- Pressed ---*/
// .ui.inverted.menu a.item:active,
// .ui.inverted.menu .link.item:active{
//   background: @invertedMenuPressedBackground;
//   color: @invertedMenuPressedColor;
// }
// 
// /*--- Active ---*/
// .ui.inverted.menu .active.item {
//   background: @invertedActiveBackground;
//   color: @invertedActiveColor !important;
// }
// .ui.inverted.vertical.menu .item .menu .active.item {
//   background: @invertedSubMenuActiveBackground;
//   color: @invertedSubMenuActiveColor;
// }
// .ui.inverted.pointing.menu .active.item:after {
//   background: @invertedArrowActiveColor !important;
//   margin: 0em !important;
//   box-shadow: none !important;
//   border: none !important;
// }
// 
// /*--- Active Hover ---*/
// .ui.inverted.menu .active.item:hover {
//   background: @invertedActiveHoverBackground;
//   color: @invertedActiveHoverColor !important;
// }
// .ui.inverted.pointing.menu .active.item:hover:after {
//   background: @invertedArrowActiveHoverColor !important;
// }
// 
// 
// /*--------------
//      Floated
// ---------------*/
// 
// .ui.floated.menu {
//   float: left;
//   margin: 0rem @floatedDistance 0rem 0rem;
// }
// .ui.floated.menu .item:last-child:before {
//   display: none;
// }
// 
// .ui.right.floated.menu {
//   float: right;
//   margin: 0rem 0rem 0rem @floatedDistance;
// }
// 
// 
// /*--------------
//     Inverted
// ---------------*/
// 
// /* Red */
// .ui.inverted.menu .red.active.item,
// .ui.inverted.red.menu {
//   background-color: @red;
// }
// .ui.inverted.red.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.red.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Orange */
// .ui.inverted.menu .orange.active.item,
// .ui.inverted.orange.menu {
//   background-color: @orange;
// }
// .ui.inverted.orange.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.orange.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Yellow */
// .ui.inverted.menu .yellow.active.item,
// .ui.inverted.yellow.menu {
//   background-color: @yellow;
// }
// .ui.inverted.yellow.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.yellow.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Olive */
// .ui.inverted.menu .olive.active.item,
// .ui.inverted.olive.menu {
//   background-color: @olive;
// }
// .ui.inverted.olive.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.olive.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Green */
// .ui.inverted.menu .green.active.item,
// .ui.inverted.green.menu {
//   background-color: @green;
// }
// .ui.inverted.green.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.green.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Teal */
// .ui.inverted.menu .teal.active.item,
// .ui.inverted.teal.menu {
//   background-color: @teal;
// }
// .ui.inverted.teal.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.teal.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Blue */
// .ui.inverted.menu .blue.active.item,
// .ui.inverted.blue.menu {
//   background-color: @blue;
// }
// .ui.inverted.blue.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.blue.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Violet */
// .ui.inverted.menu .violet.active.item,
// .ui.inverted.violet.menu {
//   background-color: @violet;
// }
// .ui.inverted.violet.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.violet.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Purple */
// .ui.inverted.menu .purple.active.item,
// .ui.inverted.purple.menu {
//   background-color: @purple;
// }
// .ui.inverted.purple.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.purple.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Pink */
// .ui.inverted.menu .pink.active.item,
// .ui.inverted.pink.menu {
//   background-color: @pink;
// }
// .ui.inverted.pink.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.pink.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Brown */
// .ui.inverted.menu .brown.active.item,
// .ui.inverted.brown.menu {
//   background-color: @brown;
// }
// .ui.inverted.brown.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.brown.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// /* Grey */
// .ui.inverted.menu .grey.active.item,
// .ui.inverted.grey.menu {
//   background-color: @grey;
// }
// .ui.inverted.grey.menu .item:before {
//   background-color: @invertedColoredDividerBackground;
// }
// .ui.inverted.grey.menu .active.item {
//   background-color: @invertedColoredActiveBackground !important;
// }
// 
// 
// /*--------------
//      Fitted
// ---------------*/
// 
// .ui.fitted.menu .item,
// .ui.fitted.menu .item .menu .item,
// .ui.menu .fitted.item {
//   padding: 0em;
// }
// .ui.horizontally.fitted.menu .item,
// .ui.horizontally.fitted.menu .item .menu .item,
// .ui.menu .horizontally.fitted.item {
//   padding-top: @itemVerticalPadding;
//   padding-bottom: @itemVerticalPadding;
// }
// .ui.vertically.fitted.menu .item,
// .ui.vertically.fitted.menu .item .menu .item,
// .ui.menu .vertically.fitted.item {
//   padding-left: @itemHorizontalPadding;
//   padding-right: @itemHorizontalPadding;
// }
// 
// /*--------------
//    Borderless
// ---------------*/
// 
// .ui.borderless.menu .item:before,
// .ui.borderless.menu .item .menu .item:before,
// .ui.menu .borderless.item:before {
//   background: none !important;
// }
// 
// /*-------------------
//        Compact
// --------------------*/
// 
// .ui.compact.menu {
//   display: inline-flex;
//   margin: 0em;
//   vertical-align: middle;
// }
// .ui.compact.vertical.menu {
//   display: inline-block;
// }
// .ui.compact.menu .item:last-child {
//   border-radius: 0em @borderRadius @borderRadius 0em;
// }
// .ui.compact.menu .item:last-child:before {
//   display: none;
// }
// .ui.compact.vertical.menu {
//   width: auto !important;
// }
// .ui.compact.vertical.menu .item:last-child::before {
//   display: block;
// }
// 
// /*-------------------
//         Fluid
// --------------------*/
// 
// .ui.menu.fluid,
// .ui.vertical.menu.fluid {
//   width: 100% !important;
// }
// 
// 
// /*-------------------
//       Evenly Sized
// --------------------*/
// 
// .ui.item.menu,
// .ui.item.menu .item {
//   width: 100%;
//   padding-left: 0em !important;
//   padding-right: 0em !important;
//   margin-left: 0em !important;
//   margin-right: 0em !important;
//   text-align: center;
//   justify-content: center;
// }
// .ui.attached.item.menu {
//   margin: 0em @attachedHorizontalOffset !important;
// }
// 
// .ui.item.menu .item:last-child:before {
//   display: none;
// }
// 
// .ui.menu.two.item .item {
//   width: 50%;
// }
// .ui.menu.three.item .item {
//   width: 33.333%;
// }
// .ui.menu.four.item .item {
//   width: 25%;
// }
// .ui.menu.five.item .item {
//   width: 20%;
// }
// .ui.menu.six.item .item {
//   width: 16.666%;
// }
// .ui.menu.seven.item .item {
//   width: 14.285%;
// }
// .ui.menu.eight.item .item {
//   width: 12.500%;
// }
// .ui.menu.nine.item .item {
//   width: 11.11%;
// }
// .ui.menu.ten.item .item {
//   width: 10.0%;
// }
// .ui.menu.eleven.item .item {
//   width: 9.09%;
// }
// .ui.menu.twelve.item .item {
//   width: 8.333%;
// }
// 
// /*--------------
//      Fixed
// ---------------*/
// 
// .ui.menu.fixed {
//   position: fixed;
//   z-index: 101;
//   margin: 0em;
//   width: 100%;
// }
// .ui.menu.fixed,
// .ui.menu.fixed .item:first-child,
// .ui.menu.fixed .item:last-child {
//   border-radius: 0px !important;
// }
// 
// .ui.fixed.menu,
// .ui[class*="top fixed"].menu {
//   top: 0px;
//   left: 0px;
//   right: auto;
//   bottom: auto;
// }
// .ui[class*="top fixed"].menu {
//   border-top: none;
//   border-left: none;
//   border-right: none;
// }
// .ui[class*="right fixed"].menu {
//   border-top: none;
//   border-bottom: none;
//   border-right: none;
//   top: 0px;
//   right: 0px;
//   left: auto;
//   bottom: auto;
//   width: auto;
//   height: 100%;
// }
// .ui[class*="bottom fixed"].menu {
//   border-bottom: none;
//   border-left: none;
//   border-right: none;
//   bottom: 0px;
//   left: 0px;
//   top: auto;
//   right: auto;
// }
// .ui[class*="left fixed"].menu {
//   border-top: none;
//   border-bottom: none;
//   border-left: none;
//   top: 0px;
//   left: 0px;
//   right: auto;
//   bottom: auto;
//   width: auto;
//   height: 100%;
// }
// 
// /* Coupling with Grid */
// .ui.fixed.menu + .ui.grid {
//   padding-top: @fixedPrecedingGridMargin;
// }
// 
// 
// /*-------------------
//        Pointing
// --------------------*/
// 
// .ui.pointing.menu .item:after {
//   visibility: hidden;
//   position: absolute;
//   content: '';
//   top: 100%;
//   left: 50%;
//   transform: translateX(-50%) translateY(-50%) rotate(45deg);
//   background: none;
// 
//   margin: (@arrowBorderWidth / 2) 0em 0em;
//   width: @arrowSize;
//   height: @arrowSize;
// 
//   border: none;
//   border-bottom: @arrowBorder;
//   border-right: @arrowBorder;
// 
//   z-index: @arrowZIndex;
//   transition: @arrowTransition;
// }
// .ui.vertical.pointing.menu .item:after {
//   position: absolute;
//   top: 50%;
//   right: 0%;
//   bottom: auto;
//   left: auto;
// 
//   transform: translateX(50%) translateY(-50%) rotate(45deg);
//   margin: 0em -(@arrowBorderWidth / 2) 0em 0em;
// 
//   border: none;
//   border-top: @arrowBorder;
//   border-right: @arrowBorder;
// }
// 
// /* Active */
// .ui.pointing.menu .active.item:after {
//   visibility: visible;
// }
// .ui.pointing.menu .active.dropdown.item:after {
//   visibility: hidden;
// }
// 
// /* Don't double up pointers */
// .ui.pointing.menu .dropdown.active.item:after,
// .ui.pointing.menu .active.item .menu .active.item:after {
//   display: none;
// }
// 
// /* Colors */
// .ui.pointing.menu .active.item:hover:after {
//   background-color: @arrowHoverColor;
// }
// .ui.pointing.menu .active.item:after {
//   background-color: @arrowActiveColor;
// }
// .ui.pointing.menu .active.item:hover:after {
//   background-color: @arrowActiveHoverColor;
// }
// 
// .ui.vertical.pointing.menu .active.item:hover:after {
//   background-color: @arrowVerticalHoverColor;
// }
// .ui.vertical.pointing.menu .active.item:after {
//   background-color: @arrowVerticalActiveColor;
// }
// .ui.vertical.pointing.menu .menu .active.item:after {
//   background-color: @arrowVerticalSubMenuColor;
// }
// 
// 
// 
// /*--------------
//     Attached
// ---------------*/
// 
// /* Middle */
// .ui.attached.menu {
//   top: 0px;
//   bottom: 0px;
//   border-radius: 0px;
//   margin: 0em @attachedHorizontalOffset;
//   width: @attachedWidth;
//   max-width: @attachedWidth;
//   box-shadow: @attachedBoxShadow;
// }
// .ui.attached + .ui.attached.menu:not(.top) {
//   border-top: none;
// }
// 
// /* Top */
// .ui[class*="top attached"].menu {
//   bottom: 0px;
//   margin-bottom: 0em;
//   top: @attachedTopOffset;
//   margin-top: @verticalMargin;
//   border-radius: @borderRadius @borderRadius 0em 0em;
// }
// .ui.menu[class*="top attached"]:first-child {
//   margin-top: 0em;
// }
// 
// /* Bottom */
// .ui[class*="bottom attached"].menu {
//   bottom: 0px;
//   margin-top: 0em;
//   top: @attachedBottomOffset;
//   margin-bottom: @verticalMargin;
//   box-shadow: @attachedBottomBoxShadow;
//   border-radius: 0em 0em @borderRadius @borderRadius;
// }
// .ui[class*="bottom attached"].menu:last-child {
//   margin-bottom: 0em;
// }
// 
// /* Attached Menu Item */
// .ui.top.attached.menu > .item:first-child {
//   border-radius: @borderRadius 0em 0em 0em;
// }
// .ui.bottom.attached.menu > .item:first-child {
//   border-radius: 0em 0em 0em @borderRadius;
// }
// 
// /* Tabular Attached */
// .ui.attached.menu:not(.tabular) {
//   border: @attachedBorder;
// }
// .ui.attached.inverted.menu {
//   border: none;
// }
// .ui.attached.tabular.menu {
//   margin-left: 0;
//   margin-right: 0;
//   width: 100%;
// }
// 
// /*--------------
//      Sizes
// ---------------*/
// 
// /* Mini */
// .ui.mini.menu {
//   font-size: @mini;
// }
// .ui.mini.vertical.menu {
//   width: @miniWidth;
// }
// 
// /* Tiny */
// .ui.tiny.menu {
//   font-size: @tiny;
// }
// .ui.tiny.vertical.menu {
//   width: @tinyWidth;
// }
// 
// /* Small */
// .ui.small.menu {
//   font-size: @small;
// }
// .ui.small.vertical.menu {
//   width: @smallWidth;
// }
// 
// /* Medium */
// .ui.menu {
//   font-size: @medium;
// }
// .ui.vertical.menu {
//   width: @mediumWidth;
// }
// 
// /* Large */
// .ui.large.menu {
//   font-size: @large;
// }
// .ui.large.vertical.menu {
//   width: @largeWidth;
// }
// 
// /* Huge */
// .ui.huge.menu {
//   font-size: @huge;
// }
// .ui.huge.vertical.menu {
//   width: @hugeWidth;
// }
// 
// /* Big */
// .ui.big.menu {
//   font-size: @big;
// }
// .ui.big.vertical.menu {
//   width: @bigWidth;
// }
// 
// /* Massive */
// .ui.massive.menu {
//   font-size: @massive;
// }
// .ui.massive.vertical.menu {
//   width: @massiveWidth;
// }
// 
// .loadUIOverrides();
// 
