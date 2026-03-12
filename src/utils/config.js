export const transportConfig = {
    auto: {
        points: [
            { name: 'Отгрузка', icon: 'fa-industry' },
            { name: 'в пути до границы', icon: 'fa-truck' },
            { name: 'Граница', icon: 'fa-flag' },
            { name: 'в пути до СВХ', icon: 'fa-truck' },
            { name: 'СВХ', icon: 'fa-cubes' },
            { name: 'в пути до склада', icon: 'fa-truck' },
            { name: 'Доставлено', icon: 'fa-warehouse' }
        ]
    },
    train: {
        points: [
            { name: 'Отгрузка', icon: 'fa-industry' },
            { name: 'в пути до станции отправления', icon: 'fa-train' },
            { name: 'Станция отправления', icon: 'fa-train' },
            { name: 'в пути до границы', icon: 'fa-train' },
            { name: 'Граница', icon: 'fa-flag' },
            { name: 'в пути до СВХ', icon: 'fa-train' },
            { name: 'СВХ', icon: 'fa-cubes' },
            { name: 'в пути до склада', icon: 'fa-train' },
            { name: 'Доставлено', icon: 'fa-warehouse' }
        ]
    },
    air: {
        points: [
            { name: 'Отгрузка', icon: 'fa-industry' },
            { name: 'в пути до аэропорта', icon: 'fa-truck' },
            { name: 'Аэропорт отправления', icon: 'fa-plane-departure' },
            { name: 'В полете', icon: 'fa-plane' },
            { name: 'Аэропорт прибытия', icon: 'fa-plane-arrival' },
            { name: 'в пути до склада', icon: 'fa-truck' },
            { name: 'Доставлено', icon: 'fa-warehouse' }
        ]
    },
    sea_rail: {
        points: [
            { name: 'Отгрузка', icon: 'fa-industry' },
            { name: 'в пути до порта отправления', icon: 'fa-truck' },
            { name: 'Порт отправления', icon: 'fa-ship' },
            { name: 'В плавании', icon: 'fa-ship' },
            { name: 'Порт прибытия', icon: 'fa-ship' },
            { name: 'Перегруз на ЖД', icon: 'fa-train' },
            { name: 'в пути до склада', icon: 'fa-truck' },
            { name: 'Доставлено', icon: 'fa-warehouse' }
        ]
    }
};

export const getTransportIcon = (type) => {
    const map = {
        auto: 'fa-truck',
        train: 'fa-train',
        air: 'fa-plane',
        sea_rail: 'fa-ship'
    };
    return map[type] || 'fa-question';
};

export const getTransportName = (type) => {
    const names = {
        auto: 'Авто',
        train: 'ЖД',
        air: 'Авиа',
        sea_rail: 'Море + ЖД'
    };
    return names[type] || type;
};