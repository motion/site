import component from '../../component'

@component
export default class Home {
  componentDidMount() {
    this.head.style.minHeight = `${window.innerHeight}px`
  }

  render() {
    return (
      <root>
        <header ref={_ => this.head = _}>
          <logo>
            yello
          </logo>
          <lead>
            Yello is data science.
          </lead>
          <snippet>
            An always on team of experts that answer your companies biggest questions with
            live, interactive applications.
          </snippet>
          <cursor />
          <snippet>
            This is the future of running companies.
          </snippet>
          <line />
        </header>
        <section>
          <h2>
            Our team
          </h2>
          <p $pad>
            We'll assign you a senior data scientist as an account lead who will be your point of contact and coordinate all your questions with our full team.
          </p>
          <p $pad>
            We hire amazing specialists from all fields of data science, from engineers to statisticians to advanced modeling experts. Our team is instantly available, diverse, and flexible which means you don’t need to recruit, hire, and manage.
          </p>
        </section>
      </root>
    )
  }

  static style = {
    root: {
      background: '#fefefe',
    },
    header: {
      background: '#111',
      padding: 100,
      color: '#ccc',
      overflow: 'hidden',
      position: 'relative',
    },
    logo: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 700,
      margin: [0, 0, 20],
    },
    lead: {
      fontSize: 82,
      fontWeight: 200,
      position: 'relative',
      zIndex: 100,
      margin: [80, 0],
    },
    snippet: {
      fontSize: 16,
      minWidth: 350,
      width: '40%',
      margin: [0, 0, 20],
    },
    line: {
      width: 1,
      height: '400%',
      background: '#333',
      position: 'absolute',
      zIndex: 0,
      top: '-100%',
      right: '50%',
      transform: {
        rotate: '20deg',
      },
    },
    cursor: {
      width: 20,
      height: 20,
      background: 'yellow',
      margin: [40, 0, 60],
    },
    section: {
      maxWidth: 1200,
      flex: 1,
      margin: [0, 'auto'],
      padding: [20, 0],
    },
    h2: {
      margin: [40, 'auto'],
      fontWeight: 200,
      fontSize: 28,
    },
    tl: {
      fontSize: 22,
    },
    pad: {
      padding: 20,
    },
    center: {
      textAlign: 'center',
    },
    p: {
      fontSize: 17,
      lineHeight: '2rem',
      margin: 0,
    }
  }
}
