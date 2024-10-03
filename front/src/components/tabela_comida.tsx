
import './styles/Erro-page.css'
const Error = () => {
    return (
        <div className="checkbox-container">
            {items.map((item) => (
                <div key={item.id} className='input_chacklist_filtro'>
                    <label>
                        <input
                            type="checkbox"
                            name={`item${item.id}`}
                            checked={!!itemsState[`item${item.id}`]}
                            onChange={handleChange1}
                        />
                        {item.label}
                    </label>
                    {itemsState[`item${item.id}`] && (
                        <Counter
                            count={itemsState[`item${item.id}`].count}
                            onIncrement={() => handleCountChange(`item${item.id}`, 1)}
                            onDecrement={() => handleCountChange(`item${item.id}`, -1)}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default Error;