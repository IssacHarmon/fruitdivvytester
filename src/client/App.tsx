import * as React from 'react';
import Home from "./views/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from './views/Navbar'

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {

		return (
			<BrowserRouter>
			<Navbar />
			<Switch>
			<Route exact path="/" component={ Home }/>
		  	</Switch>
			</BrowserRouter>
			  
		
			  );
			
			
			
			
	}
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;
