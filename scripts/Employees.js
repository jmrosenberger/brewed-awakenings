import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            let orderCount = 0

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    
                    const employeeOrders = orders.filter(  // <--- Go to YouTube and search "javascript array filter"
                    (order) => {
                            if (order.employeeId === employee.id) {
                                orderCount++
                                return true
                            }
                        }
                    )

                    window.alert(` ${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)





export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

