import React from 'react';
import Transition from '../components/transition';
import Tilt from '../misc/tilt';

class DetailComic extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.tilt = new Tilt();

    this.refs.img.onload = () => {
      const titleH = this.refs.title.getBoundingClientRect().height;
      const viewH = document.body.clientHeight - 30 - titleH;

      setTimeout(() => {
        const loader = document.querySelector('.slides .loader');

        setTimeout(() => {
          this.refs.content.classList.add('active');
          //this.refs.infos.style = `transform:translateY(${viewH}px)`;

          this.refs.img.classList.add('show');

          slides.reverse().map((el, index) => {
            loader.classList.remove('show');
            el.classList.remove('active');
            el.classList.add('out');
          });

          this.tilt.init(this.refs.img);

        }, 800);

      }, 300);

      document.querySelector('html').classList.add('disable-scroll');
    };

    let slides = [...document.querySelectorAll('.slides .first')];
    this.animateIn(slides);

  }
  componentWillUnmount() {
    document.querySelector('html').classList.remove('disable-scroll');
  }
  createMarkup(markup) {
    return { __html: markup }
  }
  animateIn(slides) {
    slides.map((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      });
    });

    const loader = document.querySelector('.slides .loader');

    setTimeout(()=>{
      loader.classList.add('show');
    }, 200);

  }
  getDescription(description) {
    return description ? <p dangerouslySetInnerHTML={this.createMarkup(description)}></p> : '';
  }
  render() {
    return (
      <div className="detail">
        <Transition />
        {
          this.props.data.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <div ref={'content'} className="detail__content" key={data.id + index}>
                <section ref={'cover'} className="detail__cover">
                  <img ref={'img'} src={data.full} />
                  <div className="detail__cover--reflex" style={{ backgroundImage: `url(${data.thumb})` }}>
                  </div>
                </section>
                <section ref={'infos'} className="detail__infos">
                  <div className="info__name info__name--comic">
                    <h2 ref={'title'}>{data.title}</h2>
                    {this.getDescription(data.description)}
                  </div>
                </section>
              </div>
            }
          })
        }

      </div>
    );
  }
}

DetailComic.propTypes = {
  match: React.PropTypes.object,
  data: React.PropTypes.array
}

export default DetailComic;
