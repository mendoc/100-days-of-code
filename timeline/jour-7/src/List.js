import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Item, Icon, Button, Popup, Visibility } from 'semantic-ui-react'
import Moment from 'react-moment'

class ListItems extends React.Component {

    state = {
        last: 3,
        visibleItems: []
    }

    handleBottomVisible = () => {
        this.setState({
            last: this.state.last + 2
        })
    }

    render() {
        let items = this.props.items

        const visibleItems = items.filter((_, ind) => {
            return ind <= this.state.last
        })

        const list = visibleItems.map((item, index) => {

            const pubDate = new Date(item.pubDate)
            return (
                <Item key={index}>
                    <Item.Image size='small' src={item.image} />
                    <Item.Content>
                        <Item.Header>{item.title}</Item.Header>
                        <Item.Meta>
                            <p className='stay'>
                                <Icon name='clock outline' size='small' /><Moment format="DD/MM/YYYY à HH:mm">{pubDate}</Moment>
                            </p>
                        </Item.Meta>
                        <Item.Description>{item.description}</Item.Description>
                        <Item.Meta>
                            <p className='stay'>Par {item.author}</p>
                        </Item.Meta>
                        <div className="ui two column grid">
                            <div className="column">
                                <a className="ui item" href={item.link}>
                                    <Button size='mini' color='grey'>Lire l'article complet</Button>
                                </a>
                            </div>
                            <div className="column">
                                <div className="ui three column grid">
                                    <div className="column">
                                        <a href={`whatsapp://send?text=${item.link}&source=&data=`}>
                                            <Icon name="whatsapp" bordered color="green" />
                                        </a>
                                    </div>
                                    <div className="column">
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${item.link}`}>
                                            <Icon name="facebook f" bordered color="blue" />
                                        </a>
                                    </div>
                                    <div className="column">
                                        <Popup
                                            content='Lien copié'
                                            on='click'
                                            pinned
                                            size='mini'
                                            hideOnScroll
                                            position='top right'
                                            trigger={
                                                <div>
                                                    <CopyToClipboard text={item.link}>
                                                        <Icon name="copy" bordered color="grey" />
                                                    </CopyToClipboard>
                                                </div>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Item.Content>
                </Item>
            )
        })

        return (
            <Visibility onBottomVisible={this.handleBottomVisible} once={false} >
                <Item.Group divided>
                    {list}
                </Item.Group>
            </Visibility>
        )
    }
}

export default ListItems