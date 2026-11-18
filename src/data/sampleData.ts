import type { Order, KitchenStation, Rider, BrandStat, DailyTrend, DeliveryBatch } from '../types';

export const recentOrders: Order[] = [
  { id: 'DD-2847', customer: 'Priya Sharma', phone: '+91 98765 43210', brand: "Domino's", items: ['Pepperoni Pizza (L)', 'Garlic Bread'], total: 450, status: 'preparing', time: '2 min ago', prepTime: 25, rider: 'Rahul M.', address: '14, Andheri West', area: 'Andheri West' },
  { id: 'DD-2846', customer: 'Arjun Mehta', phone: '+91 87654 32109', brand: 'Burger King', items: ['Whopper Meal', 'Onion Rings'], total: 320, status: 'ready', time: '5 min ago', prepTime: 18, rider: 'Suresh K.', address: '7B, Bandra East', area: 'Bandra' },
  { id: 'DD-2845', customer: 'Sneha Kapoor', phone: '+91 76543 21098', brand: 'KFC', items: ['Chicken Zinger', 'Coleslaw', 'Pepsi'], total: 285, status: 'dispatched', time: '8 min ago', prepTime: 15, rider: 'Amit D.', address: '22, Juhu Lane', area: 'Juhu' },
  { id: 'DD-2844', customer: 'Rohit Verma', phone: '+91 65432 10987', brand: "McDonald's", items: ['McSpicy Burger', 'Large Fries', 'McFlurry'], total: 390, status: 'delivered', time: '12 min ago', prepTime: 20, rider: 'Vikram S.', address: '5, Powai Heights', area: 'Powai' },
  { id: 'DD-2843', customer: 'Anjali Nair', phone: '+91 54321 09876', brand: 'Pizza Hut', items: ['BBQ Chicken Pizza (M)', 'Pasta Arrabiata'], total: 520, status: 'pending', time: '3 min ago', prepTime: 30, address: '18, Malad West', area: 'Malad' },
  { id: 'DD-2842', customer: 'Kunal Desai', phone: '+91 43210 98765', brand: 'Subway', items: ['Veggie Delite 6"', 'Chicken Teriyaki 6"'], total: 220, status: 'preparing', time: '7 min ago', prepTime: 12, rider: 'Ravi P.', address: '9, Goregaon East', area: 'Goregaon' },
  { id: 'DD-2841', customer: 'Meera Joshi', phone: '+91 32109 87654', brand: "Domino's", items: ['Farmhouse Pizza (XL)'], total: 580, status: 'dispatched', time: '15 min ago', prepTime: 28, rider: 'Nitin B.', address: '33, Versova', area: 'Andheri West' },
  { id: 'DD-2840', customer: 'Siddharth Rao', phone: '+91 21098 76543', brand: 'Burger King', items: ['Double Whopper', 'Fries', 'Cold Coffee'], total: 410, status: 'delivered', time: '22 min ago', prepTime: 16, rider: 'Rahul M.', address: '11, Lokhandwala', area: 'Andheri West' },
  { id: 'DD-2839', customer: 'Pooja Pillai', phone: '+91 10987 65432', brand: 'KFC', items: ['Hot & Crispy 8pc'], total: 650, status: 'cancelled', time: '25 min ago', prepTime: 22, address: '6, Chembur Colony', area: 'Chembur' },
  { id: 'DD-2838', customer: 'Tanmay Shah', phone: '+91 90876 54321', brand: "McDonald's", items: ['Maharaja Mac Meal', 'Apple Pie'], total: 345, status: 'delivered', time: '30 min ago', prepTime: 18, rider: 'Suresh K.', address: '27, Thane West', area: 'Thane' },
  { id: 'DD-2837', customer: 'Deepa Iyer', phone: '+91 80765 43210', brand: 'Pizza Hut', items: ['Veg Supreme (L)', 'Cheesy Dips'], total: 480, status: 'ready', time: '11 min ago', prepTime: 25, rider: 'Amit D.', address: '3, Kharghar', area: 'Navi Mumbai' },
  { id: 'DD-2836', customer: 'Varun Chopra', phone: '+91 70654 32109', brand: 'Subway', items: ['Steak & Cheese 12"', 'Oatmeal Raisin Cookie'], total: 310, status: 'preparing', time: '9 min ago', prepTime: 10, rider: 'Vikram S.', address: '14, Borivali East', area: 'Borivali' },
];

export const allOrders: Order[] = [
  ...recentOrders,
  { id: 'DD-2835', customer: 'Nisha Agarwal', phone: '+91 60543 21098', brand: "Domino's", items: ['Cheese Burst Pizza (M)'], total: 360, status: 'delivered', time: '35 min ago', prepTime: 25, rider: 'Ravi P.', address: '8, Andheri East', area: 'Andheri East' },
  { id: 'DD-2834', customer: 'Kartik Bhatt', phone: '+91 50432 10987', brand: 'Burger King', items: ['BK Chicken Nuggets', 'Large Coke'], total: 280, status: 'delivered', time: '40 min ago', prepTime: 14, rider: 'Nitin B.', address: '19, Santacruz', area: 'Santacruz' },
  { id: 'DD-2833', customer: 'Ritika Sinha', phone: '+91 40321 09876', brand: 'KFC', items: ['Rice Box Meal', 'Krush'], total: 300, status: 'cancelled', time: '45 min ago', prepTime: 20, address: '25, Dadar', area: 'Dadar' },
  { id: 'DD-2832', customer: 'Aryan Gupta', phone: '+91 30210 98765', brand: "McDonald's", items: ['Chicken McNuggets 20pc', 'Large Fries x2'], total: 560, status: 'delivered', time: '50 min ago', prepTime: 18, rider: 'Rahul M.', address: '2, Worli', area: 'Worli' },
];

export const kitchenStations: KitchenStation[] = [
  { id: 'KS-01', name: "Domino's Station A", brand: "Domino's", activeOrders: 8, pendingOrders: 3, status: 'overloaded', avgPrepTime: 28, staff: 4 },
  { id: 'KS-02', name: 'Burger King Grill', brand: 'Burger King', activeOrders: 5, pendingOrders: 2, status: 'busy', avgPrepTime: 16, staff: 3 },
  { id: 'KS-03', name: 'KFC Fry Station', brand: 'KFC', activeOrders: 3, pendingOrders: 1, status: 'busy', avgPrepTime: 20, staff: 3 },
  { id: 'KS-04', name: "McDonald's Counter", brand: "McDonald's", activeOrders: 6, pendingOrders: 4, status: 'overloaded', avgPrepTime: 18, staff: 5 },
  { id: 'KS-05', name: 'Pizza Hut Oven', brand: 'Pizza Hut', activeOrders: 2, pendingOrders: 0, status: 'idle', avgPrepTime: 25, staff: 2 },
  { id: 'KS-06', name: 'Subway Assembly', brand: 'Subway', activeOrders: 1, pendingOrders: 1, status: 'idle', avgPrepTime: 10, staff: 2 },
];

export const riders: Rider[] = [
  { id: 'R-01', name: 'Rahul Mishra', phone: '+91 98001 23456', status: 'on-delivery', currentOrder: 'DD-2847', deliveries: 23, rating: 4.8, area: 'Andheri', vehicle: 'bike', earnings: 1840 },
  { id: 'R-02', name: 'Suresh Kumar', phone: '+91 97001 23456', status: 'on-delivery', currentOrder: 'DD-2846', deliveries: 19, rating: 4.6, area: 'Bandra', vehicle: 'scooter', earnings: 1520 },
  { id: 'R-03', name: 'Amit Dubey', phone: '+91 96001 23456', status: 'on-delivery', currentOrder: 'DD-2845', deliveries: 17, rating: 4.9, area: 'Juhu', vehicle: 'bike', earnings: 1360 },
  { id: 'R-04', name: 'Vikram Singh', phone: '+91 95001 23456', status: 'available', deliveries: 21, rating: 4.7, area: 'Powai', vehicle: 'scooter', earnings: 1680 },
  { id: 'R-05', name: 'Ravi Patil', phone: '+91 94001 23456', status: 'on-delivery', currentOrder: 'DD-2842', deliveries: 15, rating: 4.5, area: 'Goregaon', vehicle: 'bicycle', earnings: 1200 },
  { id: 'R-06', name: 'Nitin Bhosle', phone: '+91 93001 23456', status: 'on-delivery', currentOrder: 'DD-2841', deliveries: 28, rating: 4.9, area: 'Versova', vehicle: 'bike', earnings: 2240 },
  { id: 'R-07', name: 'Deepak More', phone: '+91 92001 23456', status: 'available', deliveries: 11, rating: 4.3, area: 'Malad', vehicle: 'scooter', earnings: 880 },
  { id: 'R-08', name: 'Sachin Pawar', phone: '+91 91001 23456', status: 'offline', deliveries: 8, rating: 4.4, area: 'Borivali', vehicle: 'bike', earnings: 640 },
  { id: 'R-09', name: 'Mahesh Yadav', phone: '+91 90001 23456', status: 'available', deliveries: 14, rating: 4.6, area: 'Thane', vehicle: 'bike', earnings: 1120 },
  { id: 'R-10', name: 'Pradeep Jadhav', phone: '+91 89001 23456', status: 'offline', deliveries: 6, rating: 4.2, area: 'Navi Mumbai', vehicle: 'scooter', earnings: 480 },
];

export const brandStats: BrandStat[] = [
  { name: "Domino's", orders: 312, revenue: 78000, color: '#006491' },
  { name: "McDonald's", orders: 189, revenue: 42750, color: '#FFC72C' },
  { name: 'Burger King', orders: 234, revenue: 58500, color: '#f97316' },
  { name: 'KFC', orders: 145, revenue: 36250, color: '#e3000b' },
  { name: 'Pizza Hut', orders: 98, revenue: 24500, color: '#ee3124' },
  { name: 'Subway', orders: 67, revenue: 16750, color: '#009743' },
];

export const dailyTrends: DailyTrend[] = [
  { day: 'Mon', orders: 523, revenue: 125800, avgDelivery: 32 },
  { day: 'Tue', orders: 612, revenue: 148400, avgDelivery: 29 },
  { day: 'Wed', orders: 489, revenue: 112600, avgDelivery: 34 },
  { day: 'Thu', orders: 701, revenue: 168300, avgDelivery: 28 },
  { day: 'Fri', orders: 834, revenue: 198750, avgDelivery: 35 },
  { day: 'Sat', orders: 967, revenue: 234200, avgDelivery: 38 },
  { day: 'Sun', orders: 847, revenue: 203800, avgDelivery: 36 },
];

export const deliveryBatches: DeliveryBatch[] = [
  { id: 'B-101', area: 'Andheri West', orders: recentOrders.filter(o => o.area === 'Andheri West'), rider: 'Rahul Mishra', estimatedTime: 35, status: 'in-progress', distance: 4.2 },
  { id: 'B-102', area: 'Bandra', orders: recentOrders.filter(o => o.area === 'Bandra'), rider: 'Suresh Kumar', estimatedTime: 28, status: 'assigned', distance: 2.8 },
  { id: 'B-103', area: 'Juhu', orders: recentOrders.filter(o => o.area === 'Juhu'), estimatedTime: 22, status: 'pending', distance: 3.5 },
  { id: 'B-104', area: 'Malad', orders: recentOrders.filter(o => o.area === 'Malad'), estimatedTime: 40, status: 'pending', distance: 6.1 },
  { id: 'B-105', area: 'Goregaon', orders: recentOrders.filter(o => o.area === 'Goregaon'), rider: 'Ravi Patil', estimatedTime: 32, status: 'in-progress', distance: 3.9 },
  { id: 'B-106', area: 'Powai', orders: recentOrders.filter(o => o.area === 'Powai'), rider: 'Vikram Singh', estimatedTime: 25, status: 'completed', distance: 5.0 },
];

export const kpiData = {
  totalOrders: 847,
  totalOrdersTrend: +12.4,
  activeOrders: 124,
  activeOrdersTrend: +8.2,
  avgPrepTime: 18,
  avgPrepTimeTrend: -3.1,
  pendingDispatches: 23,
  pendingDispatchesTrend: -5.7,
};
