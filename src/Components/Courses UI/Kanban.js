import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'


const getBoard =  () => {
  return JSON.parse(localStorage.getItem('board'))
}


const initBoard = {
    columns: [
        {
            id: 1,
            title: "To do",
            cards: [

                {
                    id: 6,
                    title: "Kursach :)",
                    description: "Database Systems"
                },

            ]
        },
        {
            id: 2,
            title: "Doing",
            cards: [
                {
                    id: 9,
                    title: "Lab 5",
                    description: "WEB Programming"
                }
            ]
        },
        {
            id: 4,
            title: "Done",
            cards: [
                {
                    id: 20,
                    title: "Lab 4",
                    description: "Database Systems"
                }
            ]
        },

    ]
};



const saveBoard = async (board) => {
    await localStorage.setItem('board',JSON.stringify(board))
}


function UncontrolledBoard(board) {

    board = getBoard() || initBoard

    return (
        <Board
            allowRemoveLane
            allowRenameColumn
            allowRemoveCard
            allowAddColumn
            onColumnNew={saveBoard}
            onCardDragEnd={saveBoard}
            onLaneRemove={saveBoard}
            onCardRemove={saveBoard}
            onLaneRename={saveBoard}
            initialBoard={board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={draftCard => ({
                id: new Date().getTime(),
                ...draftCard
            })}
            onCardNew={saveBoard}
        />
    );
}


export default function Kanban () {

    return (
    <div className={'col'}>
        <UncontrolledBoard />
    </div>
    )
}

