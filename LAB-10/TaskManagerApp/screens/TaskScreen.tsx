import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList,
  Modal, LayoutAnimation, UIManager, Platform, Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-date-picker';
import { Swipeable } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../ThemeContext';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  priority: string;
  dueDate: string | null;
}

const CATEGORIES = [
  { name: 'Personal', icon: 'person' },
  { name: 'Work', icon: 'briefcase' },
  { name: 'Study', icon: 'book' }
];
const PRIORITIES = ['Low', 'Medium', 'High'];

const TaskScreen = () => {
  const insets = useSafeAreaInsets();
  const { colors, isDarkMode } = useTheme();
  const styles = getStyles(colors);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Input States
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(CATEGORIES[0].name);
  const [taskPriority, setTaskPriority] = useState(PRIORITIES[1]);
  const [taskDate, setTaskDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [hasDueDate, setHasDueDate] = useState(false);

  // Edit States
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => { loadTasks(); }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    } catch (e) {}
  };

  const saveTasks = async (newTasks: Task[]) => {
    try { await AsyncStorage.setItem('@tasks', JSON.stringify(newTasks)); } catch (e) {}
  };

  const addTask = () => {
    if (taskText.trim() === '') return;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    const newTask: Task = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      category: taskCategory,
      priority: taskPriority,
      dueDate: hasDueDate ? taskDate.toISOString() : null,
    };
    
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    
    setTaskText('');
    setTaskCategory(CATEGORIES[0].name);
    setTaskPriority(PRIORITIES[1]);
    setHasDueDate(false);
  };

  const toggleComplete = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const updated = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    setTasks(updated);
    saveTasks(updated);
  };

  const deleteTask = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
    saveTasks(updated);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setEditModalVisible(true);
  };

  const saveEditTask = () => {
    if (!editingTask || editingTask.text.trim() === '') return;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const updated = tasks.map(t => t.id === editingTask.id ? editingTask : t);
    setTasks(updated);
    saveTasks(updated);
    setEditModalVisible(false);
    setEditingTask(null);
  };

  const getPriorityColor = (pri: string) => {
    switch (pri) {
      case 'High': return colors.danger;
      case 'Medium': return colors.warning;
      case 'Low': return colors.success;
      default: return colors.textSecondary;
    }
  };

  const filteredTasks = tasks.filter(t => filterCategory === 'All' || t.category === filterCategory);
  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  const renderRightActions = (id: string) => (
    <TouchableOpacity style={styles.deleteSwipeBtn} onPress={() => deleteTask(id)}>
      <Ionicons name="trash" size={24} color="white" />
    </TouchableOpacity>
  );

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <View style={[styles.container, { paddingTop: Math.max(insets.top, 15) }]}>

      {/* Top Profile Header */}
      <View style={styles.topHeader}>
        <View>
          <Text style={styles.greetingText}>{getGreeting()},</Text>
          <Text style={styles.nameText}>Girish 👋</Text>
        </View>
        <TouchableOpacity style={styles.avatarBtn}>
          <Image source={{uri: 'https://ui-avatars.com/api/?name=Girish&background=3b82f6&color=fff&size=100'}} style={styles.avatarImage} />
        </TouchableOpacity>
      </View>

      {/* Stunning Summary Card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryDetails}>
          <Text style={styles.summaryTitle}>Today's Progress</Text>
          <Text style={styles.summaryDate}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
          <View style={styles.progressRow}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
            </View>
            <Text style={styles.progressText}>{progressPercent}%</Text>
          </View>
          <Text style={styles.summaryCount}>{completedCount}/{tasks.length} tasks completed</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Ionicons name="trophy" size={40} color="#fcd34d" />
        </View>
      </View>

      {/* Input Area */}
      <View style={styles.inputCard}>
        <View style={styles.inputRow}>
          <Ionicons name="create-outline" size={20} color={colors.textSecondary} style={styles.inputIcon} />
          <TextInput
            placeholder="What needs to be done?"
            placeholderTextColor={colors.textSecondary}
            style={styles.input}
            value={taskText}
            onChangeText={setTaskText}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.optionsRow}>
          <View style={styles.optionGroup}>
            {CATEGORIES.map(cat => (
              <TouchableOpacity 
                key={cat.name} 
                style={[styles.chip, taskCategory === cat.name && styles.chipActive]}
                onPress={() => setTaskCategory(cat.name)}
              >
                <Ionicons name={taskCategory === cat.name ? cat.icon : `${cat.icon}-outline`} size={14} color={taskCategory === cat.name ? 'white' : colors.textSecondary} />
                <Text style={[styles.chipText, taskCategory === cat.name && styles.chipTextActive]}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.optionsRow}>
          <TouchableOpacity 
            style={[styles.chip, hasDueDate && styles.chipActive]} 
            onPress={() => {
              if (hasDueDate) setHasDueDate(false);
              else setShowDatePicker(true);
            }}
          >
            <Ionicons name="calendar-outline" size={14} color={hasDueDate ? 'white' : colors.textSecondary} />
            <Text style={[styles.chipText, hasDueDate && styles.chipTextActive]}>{hasDueDate ? `Due: ${taskDate.toLocaleDateString()}` : 'Date'}</Text>
          </TouchableOpacity>
          <View style={styles.prioritySelector}>
            {PRIORITIES.map(pri => (
              <TouchableOpacity 
                key={pri} 
                style={[styles.priorityDot, taskPriority === pri && styles.priorityDotActive, { backgroundColor: taskPriority === pri ? getPriorityColor(pri) : colors.surface }]}
                onPress={() => setTaskPriority(pri)}
              />
            ))}
          </View>
        </View>
      </View>

      <DatePicker
        modal
        open={showDatePicker}
        date={taskDate}
        mode="date"
        theme={isDarkMode ? "dark" : "light"}
        onConfirm={(date) => {
          setShowDatePicker(false);
          setTaskDate(date);
          setHasDueDate(true);
        }}
        onCancel={() => setShowDatePicker(false)}
      />

      {/* Filters */}
      <View style={styles.listHeaderRow}>
        <Text style={styles.listHeading}>Recent Tasks</Text>
      </View>
      <View style={styles.filterRow}>
        {['All', ...CATEGORIES.map(c => c.name)].map(cat => (
          <TouchableOpacity 
            key={cat} 
            style={[styles.filterBtn, filterCategory === cat && styles.filterBtnActive]}
            onPress={() => setFilterCategory(cat)}
          >
            <Text style={[styles.filterText, filterCategory === cat && styles.filterTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Empty State */}
      {filteredTasks.length === 0 && (
        <View style={styles.emptyContainer}>
          <Ionicons name="checkmark-done-circle-outline" size={70} color={colors.surface} />
          <Text style={styles.emptyTitle}>All Caught Up!</Text>
          <Text style={styles.emptySubtitle}>You have no tasks in this category.</Text>
        </View>
      )}

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item.id)}>
            <TouchableOpacity 
              activeOpacity={0.8}
              onPress={() => openEditModal(item)}
              style={[styles.taskCard, item.completed && styles.taskCardCompleted]}
            >
              <TouchableOpacity style={[styles.checkBox, item.completed && styles.checkBoxActive]} onPress={() => toggleComplete(item.id)}>
                {item.completed && <Ionicons name="checkmark" size={18} color="white" />}
              </TouchableOpacity>
              
              <View style={styles.taskDetails}>
                <Text style={[styles.taskText, item.completed && styles.completedText]}>{item.text}</Text>
                <View style={styles.taskMetadata}>
                  <View style={styles.categoryTagContainer}>
                    <Ionicons name={CATEGORIES.find(c => c.name === item.category)?.icon || 'list'} size={12} color={colors.textSecondary} />
                    <Text style={styles.categoryTag}>{item.category}</Text>
                  </View>
                  {item.dueDate && <Text style={styles.dateTag}>🗓 {new Date(item.dueDate).toLocaleDateString()}</Text>}
                  <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(item.priority) }]} />
                </View>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )}
      />

      {/* Edit Modal */}
      <Modal visible={editModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Task</Text>
            {editingTask && (
              <>
                <TextInput
                  style={styles.modalInput}
                  value={editingTask.text}
                  onChangeText={(val) => setEditingTask({ ...editingTask, text: val })}
                />
                <View style={styles.modalOptions}>
                  <Text style={styles.modalSubtitle}>Category:</Text>
                  <View style={styles.optionGroup}>
                    {CATEGORIES.map(cat => (
                      <TouchableOpacity 
                        key={cat.name} 
                        style={[styles.chip, editingTask.category === cat.name && styles.chipActive]}
                        onPress={() => setEditingTask({ ...editingTask, category: cat.name })}
                      >
                        <Text style={[styles.chipText, editingTask.category === cat.name && styles.chipTextActive]}>{cat.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
                <View style={styles.modalOptions}>
                  <Text style={styles.modalSubtitle}>Priority:</Text>
                  <View style={styles.optionGroup}>
                    {PRIORITIES.map(pri => (
                      <TouchableOpacity 
                        key={pri} 
                        style={[styles.chip, { backgroundColor: editingTask.priority === pri ? getPriorityColor(pri) : colors.surface }]}
                        onPress={() => setEditingTask({ ...editingTask, priority: pri })}
                      >
                        <Text style={styles.chipTextWhite}>{pri}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
                <View style={styles.modalActions}>
                  <TouchableOpacity style={styles.modalCancel} onPress={() => setEditModalVisible(false)}><Text style={styles.modalCancelText}>Cancel</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.modalSave} onPress={saveEditTask}><Text style={styles.modalSaveText}>Save</Text></TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20 },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, marginBottom: 20 },
  greetingText: { color: colors.textSecondary, fontSize: 16 },
  nameText: { color: colors.text, fontSize: 28, fontWeight: 'bold' },
  avatarBtn: { padding: 4, borderRadius: 30, backgroundColor: colors.card },
  avatarImage: { width: 50, height: 50, borderRadius: 25 },
  
  summaryCard: { backgroundColor: colors.tint, borderRadius: 24, padding: 22, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  summaryDetails: { flex: 1 },
  summaryTitle: { color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: '600' },
  summaryDate: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 4, marginBottom: 15 },
  progressRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  progressBarBg: { flex: 1, height: 8, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 4, marginRight: 10 },
  progressBarFill: { height: '100%', backgroundColor: 'white', borderRadius: 4 },
  progressText: { color: 'white', fontWeight: 'bold' },
  summaryCount: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
  iconWrapper: { backgroundColor: 'rgba(255,255,255,0.2)', width: 66, height: 66, borderRadius: 33, justifyContent: 'center', alignItems: 'center', marginLeft: 15 },
  
  inputCard: { backgroundColor: colors.card, padding: 18, borderRadius: 20, marginBottom: 20, borderWidth: 1, borderColor: colors.border },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.background, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: colors.border },
  inputIcon: { paddingLeft: 14 },
  input: { flex: 1, padding: 14, color: colors.text },
  addButton: { width: 44, height: 44, backgroundColor: colors.tint, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginRight: 4 },
  
  optionsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  optionGroup: { flexDirection: 'row', gap: 8 },
  chip: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: colors.surface, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 },
  chipActive: { backgroundColor: colors.tint },
  chipText: { color: colors.textSecondary, fontSize: 13, fontWeight: '600' },
  chipTextActive: { color: 'white' },
  chipTextWhite: { color: 'white', fontSize: 13, fontWeight: '600' },
  
  prioritySelector: { flexDirection: 'row', gap: 10 },
  priorityDot: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: colors.card },
  priorityDotActive: { borderColor: colors.text },
  
  listHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  listHeading: { fontSize: 20, fontWeight: 'bold', color: colors.text },
  filterRow: { flexDirection: 'row', marginBottom: 15, gap: 10 },
  filterBtn: { paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20, backgroundColor: 'transparent' },
  filterBtnActive: { backgroundColor: colors.surface },
  filterText: { color: colors.textSecondary, fontWeight: 'bold' },
  filterTextActive: { color: colors.text },
  
  taskCard: { backgroundColor: colors.card, padding: 16, borderRadius: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center', borderLeftWidth: 4, borderLeftColor: colors.tint, borderWidth: 1, borderColor: colors.border },
  taskCardCompleted: { borderLeftColor: colors.success, opacity: 0.7 },
  checkBox: { width: 26, height: 26, borderWidth: 2, borderColor: colors.tint, borderRadius: 8, marginRight: 15, justifyContent: 'center', alignItems: 'center' },
  checkBoxActive: { backgroundColor: colors.success, borderColor: colors.success },
  taskDetails: { flex: 1 },
  taskText: { color: colors.text, fontSize: 16, fontWeight: '500', marginBottom: 6 },
  completedText: { textDecorationLine: 'line-through', color: colors.textSecondary },
  
  taskMetadata: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  categoryTagContainer: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  categoryTag: { color: colors.textSecondary, fontSize: 13 },
  dateTag: { color: colors.warning, fontSize: 12 },
  priorityBadge: { width: 10, height: 10, borderRadius: 5, marginLeft: 'auto' },
  
  deleteSwipeBtn: { backgroundColor: colors.danger, width: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 16, marginBottom: 12, marginLeft: 10 },
  
  emptyContainer: { alignItems: 'center', justifyContent: 'center', marginTop: 40 },
  emptyTitle: { color: colors.text, fontSize: 20, fontWeight: 'bold', marginTop: 15 },
  emptySubtitle: { color: colors.textSecondary, marginTop: 8 },
  
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: colors.card, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30 },
  modalTitle: { color: colors.text, fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  modalInput: { backgroundColor: colors.background, color: colors.text, padding: 18, borderRadius: 14, fontSize: 16, marginBottom: 25, borderWidth: 1, borderColor: colors.border },
  modalSubtitle: { color: colors.textSecondary, marginBottom: 12, fontWeight: 'bold', fontSize: 15 },
  modalOptions: { marginBottom: 25 },
  modalActions: { flexDirection: 'row', gap: 15, marginTop: 15 },
  modalCancel: { flex: 1, backgroundColor: colors.surface, padding: 18, borderRadius: 14, alignItems: 'center' },
  modalSave: { flex: 1, backgroundColor: colors.tint, padding: 18, borderRadius: 14, alignItems: 'center' },
  modalCancelText: { color: colors.text, fontWeight: 'bold', fontSize: 16 },
  modalSaveText: { color: colors.white, fontWeight: 'bold', fontSize: 16 }
});

export default TaskScreen;