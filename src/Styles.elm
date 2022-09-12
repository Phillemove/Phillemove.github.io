module Styles exposing
    ( clickableStyle
    , displayNone
    , fontStyle
    , headerGridStyles
    , mainGridStyles
    , subGridStyles
    )

import Html exposing (Attribute)
import Html.Attributes exposing (style)


mainGridStyles : List (Attribute msg)
mainGridStyles =
    [ style "display" "grid"
    , style "width" "90%"
    , style "grid-template-rows" "10% 90%"
    , style "grid-template-columns" "75% 25%"
    , style "margin" "auto"
    , style "margin-top" "0.1em"
    , style "font-family" "verdana"
    , style "background-color" "white"
    ]


subGridStyles : List (Attribute msg)
subGridStyles =
    [ style "grid-column" "1/2"
    , style "grid-row" "2/2"
    , style "grid-template-rows" "subgrid"
    , style "position" "sticky"
    , style "top" "0"
    , style "height" "100vh"
    , style "box-sizing" "border-box"
    , style "margin-top" "1em"
    , style "overflow-y" "scroll"
    ]


headerGridStyles : List (Attribute msg)
headerGridStyles =
    [ style "grid-row" "1/2"
    , style "grid-column" "1/ span 2"
    , style "border-bottom" "solid 2px lightgray"
    ]


clickableStyle : List (Attribute msg)
clickableStyle =
    [ style "cursor" "pointer"
    , style "color" "gray"
    , style "margin-right" "1em"
    ]


displayNone : List (Attribute msg)
displayNone =
    [ style "display" "none" ]


fontStyle : List (Attribute msg)
fontStyle =
    [ style "font-weight" "bold" ]
