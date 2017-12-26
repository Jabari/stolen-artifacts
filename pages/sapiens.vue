<template>
        <div>
                <h1>Sapiens audiobook</h1>
                <ul>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/01 Part One_ The Cognitive Revolution.mp3">01 <em>Part One</em> - The Cognitive Revolution</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/02 The Tree of Knowledge.mp3">02 The Tree of Knowledge</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/03 A Day in the Life of Adam and Eve.mp3">03 A Day in the Life of Adam and Eve</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/04 The Flood.mp3">04 The Flood</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/05 Part Two_ The Agricultural Revolution.mp3">05 <em>Part Two</em> - The Agricultural Revolution</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/06 Building Pyramids.mp3">06 Building Pyramids</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/07 Memory Overload.mp3">07 Memory Overload</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/08 There is No Justice in History.mp3">08 There is No Justice in History</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/09 Part Three_ The Unification of Humankind.mp3">09 <em>Part Three</em> - The Unification of Humankind</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/10 The Scent of Money.mp3">10 The Scent of Money</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/11 Imperial Visions.mp3">11 Imperial Visions</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/12 The Law of Religion.mp3">12 The Law of Religion</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/13 The Secret of Success.mp3">13 The Secret of Success</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/14 Part Four_ The Scientific Revolution.mp3">14 <em>Part Four</em> - The Scientific Revolution</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/15 The Marriage of Science and Empire.mp3">15 The Marriage of Science and Empire</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/16 The Capitalist Creed.mp3">16 The Capitalist Creed</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/17 The Wheels of Industry.mp3">17 The Wheels of Industry.mp3"</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/18 A Permanent Revolution.mp3">18 A Permanent Revolution</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/19 And They Lived Happily Ever After.mp3">19 And They Lived Happily Ever After</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/20 The End of Homo Sapiens.mp3">20 The End of Homo Sapiens</a>
                        </li>
                        <li>
                                <a href="Sapiens - Yuval Noah Harari - Audiobook/21 Afterword_ The Animal that Became a God.mp3">21 <em>Afterword</em> - The Animal that Became a God</a>
                        </li>
                </ul>
        </div>
</template>
<script>
        export default {
                name: 'sapiens',
                head () {
                    return {
                        base: { target: '_blank', href: 'https://s3-us-west-2.amazonaws.com/stolenartifacts.com/' }
                    }
                },
        }
</script>
<style lang="scss">
        a {
                color: #07a;
                font-family: Consolas, Monaco, Mono, monospace;
                line-height: 1.5;
                margin: 1.5rem;
                text-decoration: none;
                text-shadow: 0 1px #efefef;
                &:hover {
                        color: darken(#07a, 5);
                        font-weight: bold;
                }
        }
        em {
                font-weight: 600;
        }
        h1 {
                margin: 1rem 0 2rem;
                text-align: center;
        }
        li {
                list-style: none;
                line-height: 2rem;
        }
</style>