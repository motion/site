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
            macro
          </logo>
          <lead>
            Macro is data science.
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
          <div $pad $center $tl>
            test me out
          </div>
        </section>
      </root>
    )
  }

  static style = {
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
    tl: {
      fontSize: 22,
    },
    pad: {
      padding: 20,
    },
    center: {
      textAlign: 'center',
    },
  }
}
