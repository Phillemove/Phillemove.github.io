module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)


type alias Model =
    String


main : Program () Model msg
main =
    Browser.element
        { init = \_ -> init
        , subscriptions = \_ -> Sub.none
        , view = view
        , update = update
        }


init : ( Model, Cmd msg )
init =
    ( "Hello World", Cmd.none )


view : Model -> Html msg
view model =
    div [] [ text model ]


update : msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        _ ->
            ( model, Cmd.none )
