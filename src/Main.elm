module Main exposing (main)

import Browser
import Html exposing (Html, br, div, h1, span, text)
import Html.Events exposing (onClick)
import Page
import Styles exposing (..)


type alias Model =
    { page : Page.Page }


type Msg
    = Projects
    | About
    | Home


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> init
        , subscriptions = \_ -> Sub.none
        , view = view
        , update = update
        }


init : ( Model, Cmd Msg )
init =
    ( { page = Page.None }, Cmd.none )


view : Model -> Html Msg
view model =
    div mainGridStyles
        [ div headerGridStyles
            [ h1 [] [ text "Phillemove - Sofware Developer" ]
            , span (onClick Home :: clickableStyle) [ text "Home" ]
            , span (onClick About :: clickableStyle) [ text "About me" ]
            , span (onClick Projects :: clickableStyle) [ text "Projects" ]
            ]
        , br [] []
        , div subGridStyles [ Page.pageContentView model.page ]
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Projects ->
            ( { model | page = Page.Projects }, Cmd.none )

        About ->
            ( { model | page = Page.About }, Cmd.none )

        Home ->
            ( { model | page = Page.None }, Cmd.none )
