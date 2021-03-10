import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Item, Icon, Button, Popup } from 'semantic-ui-react'
import Moment from 'react-moment'

const paragraph = 'La vie est belle'

class ListItems extends React.Component {

    render() {
        const items = this.props.items
        const list = items.map((item, index) => {
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
            <Item.Group divided>
                {list}
            </Item.Group>
        )
    }
}

export default ListItems