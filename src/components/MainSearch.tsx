import React, { useState, useEffect, ChangeEvent } from 'react';
import {Col} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Loader from './Loader';
import SingleSong from './SingleSong';

interface Query {
    query: string
}
export interface Music {
    id: number,
    title: string,
    artist: {
        name: string
    },
    album : {
        cover_medium: string
    },
}
interface Loading {
    isLoading: boolean
}

const MainSearch = () => {

    const [query, setQuery] = useState< null | Query >(null)
    const [isLoading, setIsLoading] = useState<Loading>({isLoading: true})
    const [music, setMusics] = useState<Music[]>([])
    useEffect(() => {
       fetchMusics()
    },[])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery({query: e.target.value})
    }
    const fetchMusics = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever`)
            if(response.ok) {
                let musics = await response.json()
                setMusics(musics)
                setIsLoading({isLoading: false})
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(isLoading)
    console.log(music)
  return ( 
    <Col md={6} className='mx-auto'>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-white'>Search for song</Form.Label>
              <Form.Control type="text" placeholder="Search..." onChange={handleInput}/>
            </Form.Group>
        </Form>
        {
            isLoading ? <Loader /> : music.map((music) => {
                console.log(music.title)
            })
        }
    </Col>
    );
}

export default MainSearch;
