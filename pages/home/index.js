import component from '../../component'
import { range } from 'lodash'
import { findDOMNode } from 'react-dom'

export default @component class Root {
  render() {
    return (
      <root>
        <Header />
        <TeamSection />
        <ProductSection />
        <Section theme="dark">
          <Flex centered $main>
            <Text big>Get in touch:</Text>
          </Flex>
          <Flex row pad>
            <Flex>email@email.com</Flex>
            <Flex>email@email.com</Flex>
            <Flex>email@email.com</Flex>
          </Flex>
        </Section>
      </root>
    )
  }

  static style = {
  }
}

@component class ProductSection {
  render() {
    return (
      <Section theme="canvas">
        <Title center>Amazing Product</Title>
        <Flex row>
          <Flex centered>
            <Text big>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </Flex>
          <Flex>
            <img src="screen.png" width={2782 / 2} height={1734 / 2} />
          </Flex>
        </Flex>
      </Section>
    )
  }

  static style = {
    img: {
      margin: [0, -700, 0, 0],
    }
  }
}

@component class TeamSection {
  render() {
    return (
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
    )
  }
}

@component class DotGrid {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <grid {...this.props}>
        {range(100).map(i =>
          <row key={i}>
            {range(100).map(j =>
              <dot key={j} />
            )}
          </row>
        )}
      </grid>

    )
  }

  static style = {
    grid: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    row: {
      flexDirection: 'row',
    },
    dot: {
      width: 2,
      height: 2,
      margin: 10,
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 100,
    },
  }
}

const color = color => ({ color })
const size = size => ({ width: size, height: size })

@component class Triangle {
  static defaultProps = {
    size: 40,
    color: 'white'
  }

  render() {
    const { size, color, ...props } = this.props

    return (
      <svg {...props} $size={size} viewBox="0 0 64 64">
        <g>
          <path fill={color} d="M63.766,59.234L33.856,3.082c-0.697-1.308-2.844-1.308-3.54,0L0.407,59.234    c-0.331,0.622-0.312,1.372,0.051,1.975c0.362,0.605,1.015,0.975,1.72,0.975h59.816c0.705,0,1.357-0.369,1.721-0.975    C64.076,60.606,64.096,59.856,63.766,59.234z M5.519,58.172L32.086,8.291l26.568,49.881H5.519z" />
        </g>
      </svg>
    )
  }

  static style = {
    size,
  }
}

@component class Square {
  static defaultProps = {
    size: 40,
    color: 'white'
  }

  render() {
    const { size, color, ...props } = this.props
    return <square $size={size} $square={color} {...props} />
  }

  static style = {
    square: color => ({
      border: `2px solid ${color}`
    }),
    size,
  }
}

@component class FloatingShapes {
  state = {
    tick: 0
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.tick > 100) {
        this.setState({ tick: 0 })
      }

      this.setState({ tick: this.state.tick + 1 })
    }, 16)
  }

  render() {
    return (
      <shapes>
        {range(20).map(i =>
          <trang $shape $pos={20/i + this.state.tick / 100} key={i}>
            <Triangle $inner={20/i + this.state.tick / 100} />
          </trang>
        )}
        {range(20).map(i =>
          <squar $shape $pos={20/i + this.state.tick / 50} key={i}>
            <Square $inner={20/i + this.state.tick / 50} />
          </squar>
        )}
      </shapes>
    )
  }

  static style = {
    shapes: {
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
    shape: {
      position: 'absolute',
    },
    pos: pos => ({
      transform: {
        rotate: `${pos * 360}deg`,
        x: pos * 50,
      }
    }),
    inner: pos => ({
      transform: {
        rotate: `${pos}deg`,
      }
    }),
  }
}

@component class Header {
  render() {
    return (
      <Section background="#111" tall>
        <DotGrid $dotgrid />
        <FloatingShapes />
        <header>
          <logo>
            <row $alignCenter>
              <brand><bb /><ba /></brand>
              <btext>macro</btext>
            </row>
          </logo>
          <align>
            <lead>
              Macro is data science
            </lead>
            <snippet $emphasis>
              Expert data scientists working work with you to answer your company's biggest questions.
            </snippet>
            <snippet>
              Our platform enables an ongoing, always up to date history of your intelligence.
            </snippet>
            <strip />
            <Flex row justify="space-between">
              <Button>
                Winter 2016 batch information
              </Button>
            </Flex>
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
    dotgrid: {
      transform: {
        rotate: '20deg'
      }
    },
    lead: {
      fontSize: '8vh',
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
    logo: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 700,
      margin: [0, 0, 20],
      pointerEvents: 'none',
      userSelect: 'none',
    },
    brand: {
      width: 16,
      height: 16,
      background: '#111',
      border: '2px solid rgb(50, 242, 174)',
      borderRadius: 1,
      margin: [-18, -5, 0, -10],
      position: 'relative',
    },
    bb: {
      background: '#111',
      position: 'absolute',
      bottom: -5,
      right: -5,
      width: 13,
      height: 13,
      // borderRadius: 100,
      transform: {
        rotate: '-45deg',
      },
    },
    btext: {
      position: 'relative',
      zIndex: 1,
    },
    strip: {
      // background: 'yellow',
      height: 5,
      flex: 1,
      margin: [40, 0, 60],
      position: 'relative',
      zIndex: 200,
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
        },
      },
      canvas: {
        section: {
          background: '#e7e6d9',
        },
      },
      dark: {
        section: {
          color: '#fff',
          background: '#222',
        },
      },
    }
  }
}

@component class Title {
  static defaultProps = {
    size: 2
  }

  render() {
    const { size, style, center, ...props } = this.props

    return React.createElement(`h${size}`, {
      ...props,
      $title: true,
      $center: center,
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
    },
    center: {
      textAlign: 'center',
    },
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

@component class Button {
  render() {
    return (
      <button {...this.props} />
    )
  }

  static style = {
    button: {
      padding: [8, 16],
      border: 'none',
      borderRadius: 6,
      background: 'rgb(0, 0, 0)',
      color: '#ccc',
      fontSize: 13,
    }
  }
}
