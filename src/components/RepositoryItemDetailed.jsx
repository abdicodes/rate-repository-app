import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Linking,
} from 'react-native';
import theme from '../theme';
import kFormatter from '../utils/kFormatter';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { SINGLE_REPOSITORY } from '../graphql/queries';
const styles = StyleSheet.create({
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  countComboContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoComboContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    flex: '1',
    marginLeft: 10,
  },
  textA: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    marginBottom: 5,
  },
  textB: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.buttonPrimary,
  },
  buttonText: {
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    letterSpacing: 0.25,
    color: theme.colors.buttonText,
    paddingHorizontal: 2,
    alignSelf: 'center',
  },
  uriText: {
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.heading,
    letterSpacing: 0.25,
    color: theme.colors.buttonText,
    paddingHorizontal: 2,
    alignSelf: 'center',
  },
  uriButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.buttonPrimary,
    margin: 15,
  },
  avatar: {
    maxWidth: 45,
    maxHeight: 45,
    margin: 1,
    padding: 1,
    flex: '0.2',
  },
});

const CountCombo = ({ count, title }) => {
  return (
    <View style={styles.countComboContainer}>
      <Text style={styles.textB}>{kFormatter(count)}</Text>
      <Text style={styles.textA}>{title}</Text>
    </View>
  );
};

const InfoCombo = ({ fullName, description, language }) => {
  return (
    <View style={styles.infoComboContainer}>
      <Text style={styles.textB}>{fullName}</Text>
      <Text style={styles.textA}>{description}</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}> {language}</Text>
      </Pressable>
    </View>
  );
};

const RepositoryItemDetailed = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(SINGLE_REPOSITORY, {
    variables: { repositoryId: id },
  });

  if (loading) return null;
  const item = data.repository;
  return (
    <View
      testID="repositoryItem"
      style={{ backgroundColor: theme.colors.singleRepository }}
    >
      <View
        style={{
          flexDirection: 'row',
          padding: 7,
          margin: 7,
        }}
      >
        <Image source={{ url: item.ownerAvatarUrl }} style={styles.avatar} />
        <InfoCombo
          fullName={item.fullName}
          description={item.description}
          language={item.language}
        />
      </View>
      <View style={styles.countsContainer}>
        <CountCombo count={item.stargazersCount} title="Stars" />
        <CountCombo count={item.forksCount} title="Forks" />
        <CountCombo count={item.reviewCount} title="Reviews" />
        <CountCombo count={item.ratingAverage} title="Rating" />
      </View>
      <View>
        <Pressable
          style={styles.uriButton}
          onPress={() => Linking.openURL(`${item.url}`)}
        >
          <Text style={styles.uriText}> Open in GitHub</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RepositoryItemDetailed;
