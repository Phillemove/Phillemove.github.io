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
    ( "Hi I'm Philipp. I am a Software Developer based in Flensburg Germany. \n I am interested in functional programming Languages and Web-Programming languages", Cmd.none )


view : Model -> Html msg
view model =
    div []
        [ h1 [] [ text "Phillemove - Sofware Developer" ]
        , text model
        , text "This site is under construction. In a few Days you will see more about me here"
        ]


update : msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        _ ->
            ( model, Cmd.none )
