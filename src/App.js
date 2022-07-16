import logo from './logo.svg';
import './App.css';
import Card from './Card';


let freeOpt=[
  {
    title:'Free',
    price: '$0',
    period:'/month',
    options:[
      {
        val:'Single User',
        className: null
      },
      {
        val:'5GB Storage',
        className: null
      },
      {
        val:'Unlimited Public Projects',
        className:null
      },
      {
        val:'Community Access',
        className:null
      },
      {
        val:'Unlimited Private Projects',
        className:'muted'
      },
      {
        val:'Dedicated Phone Support',
        className:'muted'
      },
      {
        val:'Free Subdomain',
        className:'muted',
      },
      {
        val:'Monthly Status Report',
        className:'muted'
      },

    ]
  }
]

let plusOpt=[
  {
    title:'PLUS',
    price: '$9',
    period:'/month',
    options:[
      {
        val:'5 Users',
        className: null
      },
      {
        val:'50GB Storage',
        className: null
      },
      {
        val:'Unlimited Public Projects',
        className:null
      },
      {
        val:'Community Access',
        className:null
      },
      {
        val:'Unlimited Private Projects',
        className:null
      },
      {
        val:'Dedicated Phone Support',
        className:null
      },
      {
        val:'Free Subdomain',
        className:null,
      },
      {
        val:'Monthly Status Report',
        className:'muted'
      },

    ]
  }
];

let proOpt=[
  {
    title:'PRO',
    price: '$49',
    period:'/month',
    options:[
      {
        val:'Single User',
        className: null
      },
      {
        val:'5GB Storage',
        className: null
      },
      {
        val:'Unlimited Public Projects',
        className:null
      },
      {
        val:'Community Access',
        className:null
      },
      {
        val:'Unlimited Private Projects',
        className:null
      },
      {
        val:'Dedicated Phone Support',
        className:null
      },
      {
        val:'Free Subdomain',
        className:null,
      },
      {
        val:'Monthly Status Report',
        className:null
      },

    ]
  }
]

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card prop = {freeOpt} />
          <Card prop = {plusOpt} />
          <Card prop = {proOpt} />
        </div>
      </div>
    </section>
    
  );
}

export default App;
