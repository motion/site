import component from '../../component'

export default @component class Root {
  render() {
    return (
      <root>
        <Head />
        <Section>
          <Title>Test it out</Title>
        </Section>
      </root>
    )
  }
}

@component class Head {
  componentDidMount() {
    this.setHeight()
    this.addEvent(window, 'resize', this.setHeight)
  }

  setHeight = () => {
    this.head.style.minHeight = `${window.innerHeight}px`
  }

  render() {
    return (
      <root>
        <header ref={_ => this.head = _}>
          <logo>
            <row $alignCenter><cursor $mblock /> macro</row>
          </logo>
          <align>
            <lead>
              Macro is data science.
            </lead>
            <snippet $emphasis>
              Expert data scientists working work with you to answer your company's biggest questions.
            </snippet>
            <snippet>
              Our platform enables an ongoing, always up to date history of your intelligence.
            </snippet>
            <strip />
            <snippet>
              This is the future of running companies.
            </snippet>
          </align>
          <line />
        </header>
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
      fontSize: 72,
      fontWeight: 200,
      position: 'relative',
      zIndex: 100,
      margin: [80, 0],
      color: '#fff',
    },
    snippet: {
      fontSize: 16,
      minWidth: 350,
      width: '40%',
      margin: [0, 0, 20],
    },
    emphasis: {
      fontSize: 22,
      lineHeight: '2rem',
      width: '45%',
    },
    line: {
      width: 1,
      height: '400%',
      background: '#252525',
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
      background: '#000',
      border: '2px solid yellow',
    },
    strip: {
      background: 'yellow',
      height: 10,
      flex: 1,
      margin: [40, 0, 60],
    },
    mblock: {
      margin: [-20, 8, 0, -20],
    },
    section: {
      maxWidth: 1200,
      flex: 1,
      margin: [0, 'auto'],
      padding: [20, 0],
    },
    align: {
      margin: ['auto', 0],
    },
    row: {
      flexFlow: 'row',
    },
    alignCenter: {
      alignItems: 'center',
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

@component class Section {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    )
  }

  static style = {
    section: {
      padding: [30, 0],
    },
  }
}

@component class Title {
  static defaultProps = {
    size: 2
  }

  render() {
    const { size, style, ...props } = this.props

    return React.createElement(`h${size}`, {
      ...props,
      $title: true,
      style: {
        ...style,
        fontSize: (6/size) * 12,
      }
    })
  }

  static style = {
    title: {
    }
  }
}
