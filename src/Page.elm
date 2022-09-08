module Page exposing (Page(..), pageContentView, pageInitView)

import AboutMe
import Html exposing (Html, div, text)
import MyProjects


type Page
    = Projects
    | About
    | None


pageContentView : Page -> Html msg
pageContentView page =
    case page of
        Projects ->
            MyProjects.myProjectsView

        About ->
            AboutMe.aboutMeView

        None ->
            pageInitView


pageInitView : Html msg
pageInitView =
    div [] [ text "Hi, I am Philipp. I am a Software Developer from Flensburg Germany. On this Page you will find something about me and my projects. Have fun while exploring it" ]
