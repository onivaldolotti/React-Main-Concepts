import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// -------------------Rendering Elements-----------------
// Elementos são as partes que compoem os componentes no React
// Eles são redenrizados no DOM
// Elementos são Imutaveis
// Quando atualizado o React recria aquele elemento
// Altera apenas o que é necessario

// Exemplo de um elemento react

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

// Exemplo - Altera apenas o elemento resposavel pelos segundo

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);


//--------------------------Components and Props ---------------------
// Componentes são independentes e reutilizaveis
// São basicamente funções JS e recebem o parametro Props

// Exemplo componente

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// no exemplo acima o retorno não precisa de parentesis pois contem apenas uma linha de retorno

// Exemplo de componente usando classe no ES6

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

// Exemplo de um componente sendo utilizado

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

//Componentes sempre começam com letras Maisculas - Welcome ao inves de welcome

// Componentes podem ser usados para compor outros componentes
// Welcome é usado para compor o componente App

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// Extrair um componente de um componente muito grande pode ajudar como Refatoração

//Exemplo de Refatoração com Extração de componentes --->

//Componente a ser refatorado
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                      src={props.author.avatarUrl}
//                      alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//Extraimos o Avatar que pode ser reutilizado em outras partes do código

//function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

//componente comentario simplificado

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <Avatar user={props.author} />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

//Componentes nunca devem alterar suas props

//Todos os componentes do react são puros, ou seja, nunca alteram sua props

// --------------------------------------State and Lifecycle -----------------------

// State é privado e completamente controlado pelo componente
// Para se ter um estado o componente deve ser uma classe do ES6
// O metodo render() dentro da classe é chamado sempre que houver uma atualização

// no Exemplo abaixo adicionamos um state local para um classe

// class Clock extends React.Component {
//     initialState = {
//         date: new Date()
//     }
//
//     state = this.initialState;
//
//     render() {
//         const {date} = this.state;
//
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

// Quando um componente é criado a o processo de mounting
// Qunado um componente é excluido a o processo de unmonting
/* podemos adicionar funcões especificas para lidar com esses comportamentos
 que são chamados de lifecycle methods*/

/* No exemplo abaixo usando o didMount para quando o componente ja estiver sido inserido no DOM
mostrar o timer na tela.
    Nele adicionamos mais um propriedade ao this, o timerID
    Tbm criamos a função tick que usa o setState para atualizar o state local
 */

// class Clock extends React.Component {
//     initialState = {
//         date: new Date()
//     }
//
//     state = this.initialState;
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         const {date} = this.state;
//
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

/*
    Usando State de forma correta

    1- Não modificar o state diretamente
        Bem direto não podemos fazer algo assim:
        this.state.comment = 'Hello';
        Só podemos setar o valor no construtor

    2- state updates podem ser assincronos
        Não entendi direito, mas ele não usa o state e o props do this, mas sim eles passados por parametro

    3 - state update são mesclados
        Os atributos do state são mesclados individualmente
 */

/*
    Os dados fluem para baixo

    Os componentes não sabem se os seus filhos ou pais contem states

    No exemplo abaixo para o componente FormattedDate date poderia ser qualquer tipo de dado, escreito a mão,
    uma props, etc...

    <FormattedDate date={this.state.date} />
    function FormattedDate(props) {
      return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
    }

    Como cada componente é individual podemos usar eles um dentro do outro e vice e versa
 */

// -----------------------------------Handling Events---------------------

/*
    Eventos no React são nomeados em camelCase
    No JSX vc passa a funcão como argumento diferente do JS onde passamos uma string

    Tomar cuidado com o contexto do this, usando arrow functions para atribuir ele ao componente corretamente

    podemos usar o this como no exemplo abaixo para fazer o bind do metodo a classe

    ou podemos passar uma arrow function no evento: onClick={() => this.handleClick()}, mas esta maneira pode causar
    problemas de performance, gerando re-renders nos componentes filhos

    -----------Quando houver dúvidas volta na doc do React =x ---------------
 */
// class Toggle extends React.Component {
//     initialState = {
//         isToggleOn: true,
//     }
//
//     state = this.initialState;
//
//     handleClick = () => {
//         this.setState(state =>({
//             isToggleOn: !state.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );

// -------------------------------Conditional Rendering -------------------------------

/*
    Usado para verificar qual componente devemos renderizar


 */

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
//
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
//
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
//
// class LoginControl extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleLoginClick = this.handleLoginClick.bind(this);
//     //     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     //     this.state = {isLoggedIn: false};
//     // }
//
//     // handleLoginClick() {
//     //     this.setState({isLoggedIn: true});
//     // }
//     //
//     // handleLogoutClick() {
//     //     this.setState({isLoggedIn: false});
//     // }
//
//     initialState = {
//         isLoggedIn: false,
//     }
//
//     state = this.initialState;
//
//     handleLoginClick = () => {
//         this.setState({isLoggedIn:true});
//     }
//
//     handleLogoutClick = () => {
//         this.setState({isLoggedIn:false});
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
//
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );

// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//             <h2>
//                 You have {unreadMessages.length} unread messages.
//             </h2>
//             }
//         </div>
//     );
// }
//
//  const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages} />,
//     document.getElementById('root')
// );

// --------------------------List and Keys -----------------------

