import component from '../../component'

export default @component class Root {
  render() {
    return (
      <root>
        <Head />
        <Section theme="odd">
          <Title>Meet our Team</Title>
          <Flex centered $main>
            <Text big>We hire amazing specialists from all fields of data science, from engineers to statisticians to advanced modeling experts. Our team is instantly available, diverse, and flexible which means you don’t need to recruit, hire, and manage.</Text>
          </Flex>
          <Flex row pad>
            <Flex>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Flex>
            <Flex>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Flex>
            <Flex>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Flex>
          </Flex>

        </Section>
      </root>
    )
  }

  static style = {
  }
}

@component class Head {
  render() {
    return (
      <Section background="#111" tall>
        <header>
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
      </Section>
    )
  }

  static style = {
    header: {
      color: '#aaa',
      flex: 1,
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
      height: 5,
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
  componentDidMount() {
    if (this.props.tall) {
      this.setHeight()
      this.addEvent(window, 'resize', this.setHeight)
    }
  }

  setHeight = () => {
    this.section.style.minHeight = `${window.innerHeight}px`
  }

  render() {
    const { background } = this.props

    return (
      <section ref={_ => this.section = _} style={{ background }}>
        <content>
          {this.props.children}
        </content>
      </section>
    )
  }

  static style = {
    section: {
      padding: ['4rem', '2rem'],
      overflow: 'hidden',
      position: 'relative',
    },
    content: {
      flex: 1,
      margin: [0, 'auto'],
      maxWidth: 1000,
      width: '100%',
    },
    theme: {
      odd: {
        section: {
          background: '#eee',
        }
      }
    }
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
      fontWeight: 200,
      margin: [0, 0, '3rem'],
    }
  }
}

@component class Text {
  render() {
    const { big, small } = this.props

    return (
      <text
        $big={big}
        $small={small}
      >
        {this.props.children}
      </text>
    )
  }

  static style = {
    text:  {
      fontSize: 16,
      lineHeight: '2rem',
      margin: [0, 0, '2rem'],
    },
    small:  {
      fontSize: 14,
      lineHeight: '2rem',
    },
    big:  {
      fontSize: 18,
      lineHeight: '2.2rem',
    },
  }
}

@component class Flex {
  render() {
    const { row, align, justify, centered, pad, style, ...props } = this.props

    return (
      <flex
        {...props}
        $row={row}
        $pad={pad}
        style={{
          ...style,
          alignItems: align || centered && 'center',
          justifyContent: justify || centered && 'center',
        }}
      />
    )
  }

  static style = {
    flex: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
    },
    pad: {
      padding: 20,
    },
  }
}
