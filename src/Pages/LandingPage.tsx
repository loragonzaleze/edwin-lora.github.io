import React from "react"
import Typist from 'react-typist'
import "../App.css"
import "../CSS/LandingPage.css"
import Terminal from 'terminal-in-react'
import { Navigate } from "react-router-dom"
import { SocialIcon } from 'react-social-icons'

interface Props { }

interface State {
    redirect : boolean,
    page : string
}



class LandingPage extends React.Component<Props, State>{
  
    constructor(props : any){
        super(props)
        this.state = {
            redirect : false,
            page : 'Home'
        }
    }



    redirect = () => {
        let redirectPage = "/" + this.state.page
        return (
            <Navigate to={redirectPage}/>
        )
    }

    mainContent = () => {
        return (
            <div className="App">
            <header className="App-header">
                <div className="terminal">
                    <Typist
                        cursor={{
                            blink : false,
                        }}
                    >
                        <p className="title">Hello, I am Edwin</p>
                        <Typist.Delay ms={200}/>
                        
                        Software Engineer, CS Student, and Fitness enthusiast

                    </Typist>
                <div className="icons">
                    <SocialIcon url="https://www.linkedin.com/in/edwinlora/" fgColor="#FFFFFF"/>
                    <SocialIcon url="https://github.com/loragonzaleze" bgColor="#000000" fgColor="#FFFFFF"/>    
                    <SocialIcon url="https://www.instagram.com/edwinlora_/" fgColor="#FFFFFF"/>
                </div>
                </div>
                    <Terminal
                        allowTabs={false}
                        color='green'
                        backgroundColor='black'
                        barColor='black'
                        //showActions={false}
                        //hideTopBar={true}
                        style={{ fontWeight: "bold", fontSize: "1em" }}
                        commands={{
                            ls : {
                                method : (args: any, print: (arg0: string) => void, runCommand: any) => {
                                    print('Home   About   Resume   Coursework    Contact')
                                },
                                options : [
                                    {
                                        name : 'ls',
                                        description: 'The default navigate is',
                                        defaultValue : 'Home'
                                    }
                                ]
                            },
                            cd : {
                                method : (args: any, print: (arg0: string) => void, runCommand: any) => {
                                    if(args._[0] === 'Home'){
                                        print('Already on Home page!')
                                    }
                                    else if(args._[0] === 'About'){
                                        this.setState({
                                            redirect : true,
                                            page : 'About'
                                        })
                                    }
                                    else if(args._[0] === 'Resume'){
                                        this.setState({
                                            redirect : true,
                                            page : 'Resume'
                                        })
                                    }
                                    else if(args._[0] === 'Coursework'){
                                        this.setState({
                                            redirect : true,
                                            page : 'Coursework'
                                        })
                                    }
                                    else if(args._[0] === 'Contact'){
                                        this.setState({
                                            redirect : true,
                                            page : 'Contact'
                                        })
                                    }
                                    else if (args._[0] == undefined){
                                        print('Enter a page to navigate to!')
                                    }
                                    else {
                                        print(args._[0] + ' does not exist!')
                                    }
                                },
                                options : [
                                    {
                                        name : 'cd',
                                        description: 'Change to page',
                                        defaultValue : 'Home'
                                    }
                                ]
                            }
                        }}
                        description={{
                            cd : 'Redirect to different page',
                            ls : "Display available pages"
                        }}
                        actionHandlers={{
                            handleClose: (toggleClose) => {
                                console.log("Hit Close")
                            }, 
                            handleMaximise: (toggleMaximise) => {
                                console.log("Hit maximize")
                            },
                            handleMinimise: (toggleMinimize) => {
                                console.log("Hit minimize")
                            }
                        }}  
                        msg='Type ls to display pages! Navigate using cd PAGE_NAME'
                    />
                
            </header>
        </div>
        )
    }

    render() {
        return (
            (this.state.redirect ? this.redirect() : this.mainContent())
        )
    }

}

export default LandingPage